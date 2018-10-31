const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const logError = (err) => console.log(err)
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('client.io').listen(server)

const accounts = require('./routes/accounts');
const profiles = require('./routes/profiles');
const tables = require('./routes/tables.js');

const Table = require('./models/Table');
const Player = require('./models/Player')
var ios = require('client.io-express-session');
const mySession = session({ secret: "oregano", resave: false, saveUninitialised: true });

app.use(mySession);
io.use(ios(mySession));
io.on('connection', clientsEvents);

function tableJoin(new_player,client,table)
{
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
                tableJoin(new_player,client,table);
            }
        })

    });

    client.on('createTable', () => {
        if (!client.handshake.session.loggedIn) {
            client.emit('error', 'Not logged in');
        }
        else{
            var new_table = new Table();
            client.join('table-' + tableId);
            var new_player = new Player();
            tableJoin(new_player,client,new_table);
        }
    })




    client.on('postBlind', () => {

    });
    client.on('call', call);
    client.on('fold', fold);
    client.on('raise', raise);

}

app.use(bodyParser.urlencoded({ extended: true }));
app.use();

app.use('/api', accounts);
app.use('/api', profiles);
app.use('/api', tables);

app.use('/', express.static(path.join(__dirname, '/client/build')))


