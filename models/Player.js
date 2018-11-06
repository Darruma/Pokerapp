var mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost/pokerdb');
const User = require('./User');
const Table = require('./Table')
var PlayerSchema = new mongoose.Schema({
	
});

PlayerSchema.methods.joinTable = function(tableId){
  this.table = tableId;
}
PlayerSchema.methods.applyBlinds = function()
{
  
}

module.exports = db.model("Player", PlayerSchema, "PokerData");
