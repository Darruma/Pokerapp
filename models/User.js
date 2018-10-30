var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const db = mongoose.createConnection('mongodb://localhost/pokerdb');

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		default: ""
	},
	password: {
		type: String,
		default: ""
	},
	posts : {
		type:Array,
		default:[]

	},
	profile_picture: {
		type: String,
		default: ""
	},
  points:{
    type:Array.
    default:[]
  }
  wins:{
    type:Number,
    default:0
  }
  draws:{
    type:Number,
    default:0
  }
  losses:{
    type:Number,
    default:0
  }
  current_game:{
    type:String,
    default:0
  }

});

UserSchema.methods.generateHash = function (password) {
	return bcrypt.hash(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
	return bcrypt.compare(password, this.password);
};

module.exports = db.model("User", UserSchema, "UserData");
