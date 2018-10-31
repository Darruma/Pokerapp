const express = require('express');
const router = express.Router();
const User = require('../models/User');
//Accounts

router.post('/login',(req, res) =>
   {
     const login_details = req.body
     User.find(
             {
                 username:login_details.username
             },
             (err,users) =>
             {
                 if(err)
                 {
                    return res.json({
                            success:false,
                            message:'Server Error'
                     })
                 }
                const user = users[0]
                if(user.validPassword(login_details.password))
                 {
                   user.loggedIn = true;
                   user.save((err)=>
                           {
                                   return res.json(
                                           {
                                              success:false,
                                              message:'Server Error'
                                           })
                           })
                   req.session.loggedIn = true;
                   req.session.user_id = user._id;
                   req.session.username = username;
                   return res.json(
                           {
                             success:true,
                             message:'Logged In'
                           })
                 }
                 else
                     {  
                        return res.json({
                            success:false,
                            message:'Wrong credentials'
                        })

                     }
             }
     )
   }
)

router.post('/signup',(req,res) =>
 {
        const signup_details  = req.body;
        if(signup_details.username.length < 4)
        {
                return res.json(
                        {
                                success:false,
                                message:'Username has to be longer than 4 characters'
                        }
                )
        }
        if(signup_details.password.length < 4)
        {
                return res.json(
                        {
                                success:false,
                                message:'Password has to be longer than 4 characters'
                        }
                )
        }
        User.find({
                username:signup_details.username

        },(err,users) =>
        {
                if(users.length != 0)
                {
                        return res.json(
                                {
                                        success:false,
                                        message:'Username already taken'
                                }
                        )
                }
                var new_user = new User();
                new_user.username = signup_details.username;
                new_user.password = new_user.generateHash(signup_details.password);
                new_user.save((err, user) => {
			if (err) {
                                console.log(err)
				return res.send({
					success: false,
					message: "Server Error"
				});
			}
			return res.send({
				success: true,
				message: "Signed up"
			});
		});
        })
 }
)



module.exports = router;
