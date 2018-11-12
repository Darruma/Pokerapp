const express = require('express');
const router = express.Router();
const User = require('../models/User');

function notLoggedIn(req,res,next){
  if(!req.session.loggedIn)
  {
    return res.json({
        success:false,
        message:'Login to perform that action'
    })
  }
  next();
}
router.get('/search/:username' ,(req,res) =>{
  User.find({
    $text:
    {
      $search:req.params.username
    }
  }).exec((err,users) =>
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
          success:'False',
          message:'No results for ' + req.params.username
        }
      )
    }
    return res.json(
      users.map((element) =>
    {
      return {
        success:true,
        username:element.username,
        bio: element.bio,
        image:element.profile_pic,
        id:element._id
      }
    })
    )
  })

})

router.post('/answerrequest',notLoggedIn,(req,res) =>{
  const answer = req.body;
  User.findById(req.session.user_id,(err,user) =>{
      if(answer.response)
      {
        user.friends.push(answer.id)
       user.friend_requests = user.friend_requests.filter(e => e.id !== answer._id);
        return res.json(
          {
            success:true,
            message:'Friend request accepted'
          }
        )
      }
      else {
        return res.json(
          {
            success:true,
            message:'Friend request declined'
          }
        )
      }
  })

})
router.post('/sendfriendrequest' ,notLoggedIn,(req,res) =>
{
  const request = req.body;
  User.findbyId(request.id,(err,potential_friend)=>
  {
    if(err){
      return res.json(
        {
          success:false,
          message:'Server Error'
        }
      )
    }
    User.findById(req.session.user_id,(err,me)=>
    {
      if(err){
        return res.json(
          {
            success:false,
            message:'Server Error'
          }
        )
      }
      potential_friend.friend_requests.push(
        {
          username:me.username,
          image:me.profile_pic,
          id:potential_friend._id
        }
      )
    })
  })
})

router.get('/getfriendrequests',notLoggedIn,(req,res) =>{

  User.findById(req.session.user_id,(err,user) =>{
    if(err)
    {
      return res.json(
        {
          success:false,
          message:'Server Error'
        }
      )
    }
    return res.json(
      {
        success:true,
        requests:user.friend_requests
      })
  })
})


module.exports = router;
