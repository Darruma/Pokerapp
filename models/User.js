const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const db = mongoose.createConnection(process.env.MONGODB_URI);
var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		default: ""
	},
	password: {
		type: String,
		default: ""
	},
	posts:
	{
		type:Array,
		default:[]
	},
	profile_pic:{
		type:String,
		default:"default_user.png"
	},
	wins:
	{
		type:Number,
		default:0
	},
	losses:
	{
		type:Number,
		default:0
	},
	points:
	{
		type:Number,
		default:0
	},
	friends:
	{
		type:Array,
		default:[]
	},
	friend_requests:{
		type:Array,
		default:[]
	},
	current_table:{
		type:String,
		default:''
	},
	tables:
	{
		type:Array,
		default:[]
	}
});
UserSchema.index({
	username:'text'
})

UserSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
};
module.exports = db.model("User", UserSchema, "UserData");
