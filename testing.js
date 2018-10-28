const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const accounts = require('./routes/accounts');
const profiles = require('./routes/profiles');
const games = require('./routes/games');


app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"oregano",resave:false,saveUninitialised:true}));
    
app.use('/api/accounts',accounts);
app.use('/api/profiles',profiles);
app.use('/api/games',games);

app.use('/',express.static(path.join (__dirname, '/client/build')))
      

