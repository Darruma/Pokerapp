var mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost/pokerdb');
const User = require('./User');
const Table = require('./Table')
var PlayerSchema = new mongoose.Schema({
	username: {
		type: String,
		default: ""
	},
  user:{
    type:String,
    default:""
  },
  chips:{
    type:Number,
    default:500
  },
  currentCards:{
    type:Array,
    default:[]
  },
  folded:{
    type:Boolean,
    default:false
  },
  sittingIn:{
    type:Boolean,
    default:true
  },
  table:{
    type:String,
    default:""
  },
  socket_id:{
    type:String
  },
  currentBet:{
    type:Number,
    default:0
  }

});

PlayerSchema.methods.joinTable = function(tableId){
  this.table = tableId;
}

PlayerSchema.methods.addCard = function(card){
  this.currentCards.push(card);
}

PlayerSchema.methods.leaveTable = function()
{
  this.table = "";
}
PlayerSchema.methods.addUser = function(user_id)
{
  User.findById(user_id,(err,user)=>
    {
      this.username = user.username;
      this.user = user;
    }
  )
}

PlayerSchema.methods.fold = function(){
        this.folded = true;
}

PlayerSchema.methods.call = function()
{
  Table.findById(this.table,
  (err,table) =>
  {
  this.currentBet = table.callAmount;
  this.chips = this.chips - this.currentBet;
  table.pot = table.pot + this.currentBet;
  })
}

PlayerSchema.methods.raise = function(betAmount)
{
  Table.findById(this.table,
  (err,table) =>
  {
  if(this.chips > betAmount)
  this.currentBet = betAmount;
  this.chips = this.chips - this.currentBet;
  table.callAmount = betAmount;
  table.pot = table.pot + this.currentBet;
  })
}

module.exports = db.model("Player", PlayerSchema, "PokerData");
