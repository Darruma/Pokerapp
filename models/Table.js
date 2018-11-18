var mongoose = require('mongoose');
const url = (process.env.MONGODB_URI) ? process.env.MONGODB_URI : 'mongodb://localhost/users'
const db = mongoose.createConnection(url);
const Deck = require('./Deck')
var TableSchema = new mongoose.Schema({
    players:
    {
        type: Array,
        default: []
    },
    board:
    {
        type: String,
        default: ''
    },
    boards:
    {
        type:Array,
        default:[]
    },
    buyin:
    {
        type: Number,
        default: 500
    }

})
TableSchema.methods.startGame = function () {

}

TableSchema.methods.lobbyData = function () {
    return (
        {
            playerAmount: this.players.length,
            blinds: this.buyin
        }
    )
}
TableSchema.methods.getPlayers = function () {
    return this.players.map(element => {
        return ({
            name: element.username,
            image: element.profilePicture,
            user: element.user,
        })
    })
}
TableSchema.methods.drawCards = function () {
    Board.findById(this.board, (err, board) => {
        Deck.findById(board.deck, (err, deck) => {
            for (var p in players) {
                Player.findById(p, (err, player) => {
                    if (player.isPlaying) {
                        player.hand.push(deck.pop());
                    }
                })
            }
        })
    })
}

module.exports = db.model("Table", TableSchema, "PokerData");
