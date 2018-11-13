const express = require('express');
const router = express.Router();
const User = require('../models/User');
var jac_matrix = {}

User.find((err, users) => {
  jac_matrix = jaccard_matrix(users.map(el => el.id));
});

function jaccard(a, b) {
  if (a.friends.length == 0 || b.friends.length == 0) {
    return 0
  }
  a_friends = new Set(a.friends);
  b_friends = new Set(b.friends);
  numerator = new Set([...a_friends].filter(x => b_friends.has(x))).length;
  denominator = new Set([...a, ...b]).length;
  return numerator / denominator;
}

function jaccard_matrix(users) {
  grid = {}
  for (var i = 0; i < users.length; i++) {
    for (var j = 0; j < users.length; j++) {
      var user1 = User.findById(users[i]);
      var user2 = User.findById(users[j]);
      var score = jaccard(user1, user2);
      grid[users[i]][users[j]] = score;
    }
  }
  return grid;
}
function most_similar(user, grid) {
  var userData = grid[user];
  userData.sort((a, b) => {

    var a_val = Object.values(a)[0];
    var b_val = Object.values(b)[0];
    return (a_val - b_val);
  }).pop()

}
router.get('/recommended_friends', notLoggedIn, (req, res) => {
  var currentUserId = req.session.id;
  return res.json(
    {
      success: true,
      payload: most_similar(currentUserId, jac_matrix)
    }
  )
})

function notLoggedIn(req, res, next) {
  if (!req.session.loggedIn) {
    return res.json({
      success: false,
      message: 'Login to perform that action'
    })
  }
  next();
}
router.get('/search/:username', (req, res) => {
  console.log('Searching')
  User.find({
    "username": { $regex: new RegExp(req.params.username), $options: 'i' }
  }).exec((err, users) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Server Error'
      })
    }
    if (users.length == 0) {
      return res.json(
        {
          success: false,
          message: 'No results for ' + req.params.username
        }
      )
    }
    return res.json(
      users.map((element) => {
        return {
          success: true,
          username: element.username,
          bio: element.bio,
          image: element.profile_pic,
          id: element._id
        }
      })
    )
  })

})

router.post('/answerrequest', notLoggedIn, (req, res) => {
  const answer = req.body;
  User.findById(req.session.user_id, (err, user) => {
    if (answer.response) {
      user.friends.push(answer.id)
      user.friend_requests = user.friend_requests.filter(e => e.id !== answer._id);
      return res.json(
        {
          success: true,
          message: 'Friend request accepted'
        }
      )
    }
    else {
      return res.json(
        {
          success: true,
          message: 'Friend request declined'
        }
      )
    }
  })

})
router.post('/sendfriendrequest', notLoggedIn, (req, res) => {
  const request = req.body;
  User.findbyId(request.id, (err, potential_friend) => {
    if (err) {
      return res.json(
        {
          success: false,
          message: 'Server Error'
        }
      )
    }
    User.findById(req.session.user_id, (err, me) => {
      if (err) {
        return res.json(
          {
            success: false,
            message: 'Server Error'
          }
        )
      }
      potential_friend.friend_requests.push(
        {
          username: me.username,
          image: me.profile_pic,
          id: potential_friend._id
        }
      )
    })
  })
})

router.get('/getfriendrequests', notLoggedIn, (req, res) => {

  User.findById(req.session.user_id, (err, user) => {
    if (err) {
      return res.json(
        {
          success: false,
          message: 'Server Error'
        }
      )
    }
    return res.json(
      {
        success: true,
        requests: user.friend_requests
      })
  })
})




module.exports = router;
