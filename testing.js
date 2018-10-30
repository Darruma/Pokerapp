const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const logError = (err) => console.log(err)
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server)
const socketsEvents = require('./sockets/events.js');
const accounts = require('./routes/accounts');
const profiles = require('./routes/profiles');
const games = require('./routes/games');
var ios = require('socket.io-express-session');
const mySession = session({secret:"oregano",resave:false,saveUninitialised:true});
app.use(mySession);
io.use(ios(mySession));
io.on('connection',socketsEvents);






function socketsEvents(client)  {
    client.on('joinTable', (gameId) => {
        Game.findbyId(gameId,
            (err, game) => {
                if (err) {
                    return err;
                }
                if (game.players.length > 4) {
                    client.emit('error', 'room full');
                }
                else {
                    game.addPlayer(client.handshake.session.userId);
                    User.findOneAndUpdate({_id:client.handshake.session.userId},{$set:{currentGame:gameId}},{new:true},(err,user)=>
                    {
                        if(err)
                        {
                            console.log(err);
                        }
                    })
                    client.join('table-' + gameId);
                    io.in('table-' + gameId).emit('player-joined', client.handshake.session.name + " has joined");
                    game.save(logError);
                }
            })
    });

    client.on('ready', () => {
        User.findbyId(client.handshake.session.userId,
            (err,user) =>
            {
                Game.findOneAndUpdate({id:_user.currentGame},{$inc:{playersReady:1}},{new:true},(err,game) =>
                {
                    if(err)
                    {
                        console.log(err);
                    }
                    if(game.playersReady == 4)
                    {
                        game.isPlaying =true;
                        game.save(logError);
                        
                    }
                })
            })
    })



    client.on('postBlind', postBlind);
    client.on('call', call);
    client.on('fold', fold);
    client.on('raise', raise);

}

app.use(bodyParser.urlencoded({extended:true}));
app.use();
    
app.use('/api/accounts',accounts);
app.use('/api/profiles',profiles);
app.use('/api/games',games);

app.use('/',express.static(path.join (__dirname, '/client/build')))
      

