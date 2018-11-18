var mongoose = require('mongoose');
const url = (process.env.MONGODB_URI) ? process.env.MONGODB_URI : 'mongodb://localhost/users'
const db = mongoose.createConnection(url);
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
  },
  balance:
  {
    type:Number,
    default:500
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
        return {
          success:true,
          message:'Table joined'
        }
      }
    })
}
PlayerSchema.methods.bet = function(amount)
{
  Table.findById(tableId,(err,table)=>
  {
    if(amount > this.balance || amount < 0)
    {
      return {
        success:false,
        message:'Invalid Amount'
      }
    }
  })
}
module.exports = db.model("Player", PlayerSchema, "PokerData");
