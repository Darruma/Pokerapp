var mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost/pokerdb');
var TableSchema = new mongoose.Schema({

})


module.exports = db.model("Table", TableSchema, "PokerData");
