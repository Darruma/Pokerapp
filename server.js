const express = require('express');
const express_session = require('express-session');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const port = (process.env.PORT) ? process.env.PORT : 3005;
server.listen(port, () => {
    console.log(`HTTPS Server running on port ${port}`);
});

const accounts = require('./routes/accounts');
const profiles = require('./routes/profiles');
const tables = require('./routes/tables.js');

const session = express_session({ secret: "oregano", resave: false, saveUninitialised: true });
app.use(session);


app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use('/api', accounts);
app.use('/api/profiles', profiles);
app.use('/api', tables);

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use('/images', express.static(path.join(__dirname, '/client/images/')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
})
