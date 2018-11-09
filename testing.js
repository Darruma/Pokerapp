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
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
})
io.on('connect', clientsEvents);

function clientsEvents()
{
}

