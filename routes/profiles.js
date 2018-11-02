const express = require('express');
const router = express.Router();
const User = require('../models/User');


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
      return
      {
        success:true,
        username:element.username,
        bio: element.bio,
        image:element.profile_pic
      }
    })
    )
  })

})

module.exports = router;
