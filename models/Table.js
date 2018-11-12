var mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost/pokerdb');
import Deck from './Deck'
var TableSchema = new mongoose.Schema({
    players:
    {
        type: Array,
        default: []
    },
    deck:
    {
        type: String,
        default: ''
    },
    buyin:
    {
        type:Number,
        default:500
    }
})
TableSchema.methods.startGame = function () {

}

TableSchema.methods.lobbyData = function()
{
    return (
        {
            playerAmount:this.players.length,
            blinds:this.buyin
        }
    )
}
TableSchema.methods.getPlayers = function () {
    return this.players.map(element => {
        return ({
            name: element.username,
            image:element.profilePicture,
            user: element.user,
        })
    })
}
TableSchema.methods.drawCards = function () {
    Deck.findById(deck, (err, deck) => {
        for (var player in players) {
            if (player.isPlaying) {
                player.hand.push(deck.pop());
            }
        }

    })
}

module.exports = db.model("Table", TableSchema, "PokerData");
