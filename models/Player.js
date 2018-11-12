var mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost/pokerdb');
const User = require('./User');
const Table = require('./Table')
var PlayerSchema = new mongoose.Schema({
  
  user:
  {
    type:String,
    default:'0'
  },
  table:
  {
    type: String,
    default: ''
  },
  hand:
  {
    type:Array,
    default:[]
  },
  isPlaying:
  {
    type:Boolean,
    default:true
  }

});

PlayerSchema.methods.joinTable = function (tableId) {
  this.table = tableId;
  Table.findById(tableId,
    (err,table) =>
    {
      if(table.isFull())
      {
        return {
          success:false,
          message:'Table is full'
        }
      }
      else
      {
        table.players.push(this);
        table.save();
      }
    })
}
PlayerSchema.methods.bet = function(amount)
{
  Table.findById(tableId,(err,table)=>
  {
  })
}

module.exports = db.model("Player", PlayerSchema, "PokerData");
