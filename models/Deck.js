var mongoose = require('mongoose');
const db = mongoose.createConnection(process.env.MONGODB_URI);

var DeckSchema = new mongoose.Schema({

  cards:
  {
    type: Array,
    default: []
  }
})

DeckSchema.methods.shuffle = function () {
  this.nextCard = 0;
  var shuffledDeck = [];

  for (var i = 0; i < 52; i++) {
    var random_card = this.cards.splice(Math.floor(Math.random() * this.cards.length), 1);
    shuffledDeck = shuffledDeck.concat(random_card);
  }
  this.cards = shuffledDeck;
}

DeckSchema.methods.pop = function () {
  return this.cards.pop();
}
DeckSchema.methods.makeDeck = function () {
  this.cards = [
    { rank: 'a', suit: 'diams' }, { rank: 'a', suit: 'clubs' }, { rank: 'a', suit: 'spades' }, { rank: 'a', suit: 'hearts' },
    { rank: 'k', suit: 'diams' }, { rank: 'k', suit: 'clubs' }, { rank: 'k', suit: 'spades' }, { rank: 'k', suit: 'hearts' },
    { rank: 'q', suit: 'diams' }, { rank: 'q', suit: 'clubs' }, { rank: 'q', suit: 'spades' }, { rank: 'q', suit: 'hearts' },
    { rank: 'j', suit: 'diams' }, { rank: 'j', suit: 'clubs' }, { rank: 'q', suit: 'spades' }, { rank: 'q', suit: 'hearts' },
    { rank: '10', suit: 'diams' }, { rank: '10', suit: 'clubs' }, { rank: '10', suit: 'spades' }, { rank: '10', suit: 'hearts' },
    { rank: '9', suit: 'diams' }, { rank: '9', suit: 'clubs' }, { rank: '9', suit: 'spades' }, { rank: '9', suit: 'hearts' },
    { rank: '8', suit: 'diams' }, { rank: '8', suit: 'clubs' }, { rank: '8', suit: 'spades' }, { rank: '8', suit: 'hearts' },
    { rank: '7', suit: 'diams' }, { rank: '7', suit: 'clubs' }, { rank: '7', suit: 'spades' }, { rank: '7', suit: 'hearts' },
    { rank: '6', suit: 'diams' }, { rank: '6', suit: 'clubs' }, { rank: '6', suit: 'spades' }, { rank: '6', suit: 'hearts' },
    { rank: '5', suit: 'diams' }, { rank: '5', suit: 'clubs' }, { rank: '5', suit: 'spades' }, { rank: '5', suit: 'hearts' },
    { rank: '4', suit: 'diams' }, { rank: '4', suit: 'clubs' }, { rank: '4', suit: 'spades' }, { rank: '4', suit: 'hearts' },
    { rank: '3', suit: 'diams' }, { rank: '3', suit: 'clubs' }, { rank: '3', suit: 'spades' }, { rank: '3', suit: 'hearts' },
    { rank: '2', suit: 'diams' }, { rank: '2', suit: 'clubs' }, { rank: '2', suit: 'spades' }, { rank: '2', suit: 'hearts' }]
}
module.exports = db.model("Deck", DeckSchema, "PokerData");
