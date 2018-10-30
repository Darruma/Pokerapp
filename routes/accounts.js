const express = require('express');
const router = express.Router();
const User = require('../models/User');
//Accounts

router.post('/login',(req, res) =>
   {
     const { login_details } = req.body;
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
                   req.session.user_id = user._id;
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

 }
)



module.exports = router;
