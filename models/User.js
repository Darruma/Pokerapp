const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const url = (process.env.MONGODB_URI) ? process.env.MONGODB_URI : 'mongodb://localhost/users'
const db = mongoose.createConnection(url);
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
	},
	priceData:
	{
		type:Array,
		default:[]
	},
	bio:
	{
		type:'String',
		default:'To be or not to be that is the question'
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

UserSchema.methods.getFriends = function(amount)
{
	var friendData = [];
	if(this.friends.length == 0)
	{
		return [];
	}
	for(var i = 0;i < amount;i++)
	{
		this.model('User').findById(this.friends[i],(err,friend)=>
		{
			
			friendData.push({
				friendName:friend.username,
				image:friend.profile_pic
			})
		});
	}
	return friendData;
}
UserSchema.methods.getMyFriends= function()
{
	return []
}
module.exports = db.model("User", UserSchema, "UserData");
