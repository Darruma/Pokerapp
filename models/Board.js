var mongoose = require('mongoose');
const db = mongoose.createConnection(process.env.MONGODB_URI);
const Deck = require('./Deck');
var BoardSchema = new mongoose.Schema({

    deck:{
        type:Array,
        default:[]
    },
    pot:{
        type:Number,
        default:0       
    },
    cards:
    {
        type:Array,
        default:[]
    },
    bets:
    {
        type:Array,
        default:[]
    },
    round:
    {
        type:Number,
        default:0
    }


})

BoardSchema.methods.flop = function()
{
    Deck.findById(this.deck,(err,d)=>
    {
       this.cards.pop(d.pop()); 
       this.cards.pop(d.pop());
       this.cards.pop(d.pop());
       this.round = this.round + 1;
       d.save(); 
    });
}

module.exports = db.model("Board", BoardSchema, "PokerData");
