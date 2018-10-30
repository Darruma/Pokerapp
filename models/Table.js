var mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost/pokerdb');
const Deck = require('./Deck')
const Player = require('./Player');
var TableSchema = new mongoose.Schema({

    deck_id:{
      type:String,
      default:''
    },
    players:
    {
      type:Array,
      default:[]
    },
    pot:
    {
      type:Number,
      default:0
    },
    round:{
      type:Number,
      default:0
    },
    boardCards:
    {
      type:Array,
      default:[]
    },
    blinds:{
      type:Object,
      default:{bigBlind:20,smallBlind:10}
    },
    mode:{
      type:String,
      default:'Preflop'
    }
})

TableSchema.methods.startGame = function(){
  this.dealCards();
  this.round = this.round + 1;
}

TableSchema.methods.dealCards = function(){
 Deck.findById(deck_id,(err,deck) =>
{
  for(var player in this.players)
  {
    Player.findById(player,(err,player) =>
    {

      if(player.sittingIn)
      {
        player.addCard(deck.pop());
        player.addCard(deck.pop());
      }
    })
  }
})

}

TableSchema.methods.Flop = function()
{
  Deck.findById(deck_id,(err,deck) =>
 {
   this.boardCards.push(deck.pop());
   this.boardCards.push(deck.pop());
   this.boardCards.push(deck.pop());

 })
}

TableSchemea.methods.turn = function(){
  Deck.findById(deck_id,(err,deck) =>
  {
   this.boardCards.push(deck.pop());
  })
}
TableSchema.methods.river  = function(){

  Deck.findById(deck_id,(err,deck) =>
  {
   this.boardCards.push(deck.pop());
  })
}
TableSchema.methods.winCondition = function()
{

}



module.exports = db.model("Table", TableSchema, "PokerData");
