const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.post('/login',(req, res) =>
   {
     const login_details = req.body;
     console.log(req.body)
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

                 if(users.length == 0)
                 {
                         return res.json(
                                 {
                                         success:false,
                                         message:'Account not found'
                                 }
                         )
                 }
                const user = users[0]
                if(user.validPassword(login_details.password))
                 {
                   user.loggedIn = true;
                   user.save();
                   req.session.loggedIn = true;
                   req.session.user_id = user._id;
                   req.session.username = user.username;
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
        console.log(req.body)
       
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

router.get('/leaderboard' ,(req ,res) =>
{
    User.find((err,users) =>
    {
        users = users.sort((a,b) =>
        {
                return (a.points > b.points);
        });
        var leaderboardData =[];
        let i = 0;

        currentUser = users[0];
        while(currentUser != null && i < 5)
        {
            leaderboardData.push(
                    {
                        username:currentUser.username,
                        points:currentUser.points
                    }
            )
            i = i + 1
            currentUser = users[i];
        }
        return res.json(leaderboardData);
    });
});


module.exports = router;
