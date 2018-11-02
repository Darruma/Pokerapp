const express = require('express');
const express_session = require('express-session');
const bodyParser = require('body-parser')
const logError = (err) => console.log(err)
const path = require('path');
const app = express();
const server = require('http').createServer(app);
server.listen(3005, () => {
	console.log('HTTPS Server running on port 3005');
});
const io = require('socket.io').listen(server)

const accounts = require('./routes/accounts');
const profiles = require('./routes/profiles');
const tables = require('./routes/tables.js');

const Table = require('./models/Table');
const Player = require('./models/Player')
const session = express_session({ secret: "oregano", resave: false, saveUninitialised: true });
var sharedsession = require("express-socket.io-session");
app.use(session);
io.use(sharedsession(session, {
    autoSave: true
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use('/api', accounts);
app.use('/api/profiles', profiles);
app.use('/api', tables);
app.use('/images', express.static(path.join(__dirname, '/client/images/')));
app.use('/', express.static(path.join(__dirname, '/client/build')))
app.get('*',(req,res) =>
{
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
})
io.on('connection', clientsEvents);

function clientsEvents(client) {
    client.on('joinTable', (tableId) => {
        Table.findById(tableId, (err, table) => {
            if (!client.handshake.session.loggedIn) {
                client.emit('error', 'Not logged in');
            }
            if (table.players.length > 4) {
                client.emit('error', 'Too many players in lobby');
            }
            else {
                client.join('table-' + tableId);
                var new_player = new Player();
                tableJoin(new_player, client, table);
            }
        })

    });

    client.on('createTable', () => {
        if (!client.handshake.session.loggedIn) {
            client.emit('error', 'Not logged in');
        }
        else {
            var new_table = new Table();
            client.join('table-' + tableId);
            var new_player = new Player();
            tableJoin(new_player, client, new_table);
        }
    })



    client.on('postBlind', () => {

    });
    client.on('call', call);
    client.on('fold', fold);
    client.on('raise', raise);

}
function tableJoin(new_player, client, table) {
    client.handshake.session.player_id = new_player._id;
    client.handshake.session.save();
    new_player.user = client.handshake.session.user_id;
    new_player.username = client.handshake.session.username;
    new_player.table = table._id;
    new_player.client_id = client.id;
    new_player.save(logError);
    table.players.push(new_player);
    table.save(logError);
}
