const express = require('express');
const router = express.Router();
const User = require('../models/User');
var jac_matrix = {}
// User.find((err, users) => {
//   jac_matrix = jaccard_matrix(users.map(el => el.id));
// });
console.log(jac_matrix)
function jaccard(a, b) {
  if (a.friends.length == 0 || b.friends.length == 0) {
    return 0
  }
  User.findById(a, (err, user1) => {
    User.findById(b, (err, user2) => {
      a_friends = new Set(user1.friends);
      b_friends = new Set(user2.friends);
      numerator = new Set([...a_friends].filter(x => b_friends.has(x))).length;
      denominator = new Set([...a, ...b]).length;
      return numerator / denominator;
    })
  })
}
function jaccard_matrix(users) {
  grid = {}
  for (var i = 0; i < users.length; i++) {
    for (var j = 0; j < users.length; j++) {
      User.findById(users[i], (err, user1) => {
        User.findById(users[j], (err, user2) => {
          var score = jaccard(user1, user2);
          grid[users[i]][users[j]] = score;


        });
      });
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
  return userData;
}

router.get('/me', (req, res) => {
  if (!req.session.loggedIn) {
    return res.json(
      {
        success: false,
        message: 'Not logged in'
      }
    )
  }
  else {
    User.findById(req.session.user_id, (err, user) => {
        if(err)
        {
          return res.json({
            success:false,
            message:'Server Error'
          })
        }
        return res.json(
          {
            success:true,
            data:
            {
              image:user.profile_pic,
              friends:user.getMyFriends(),
              priceData: user.priceData,
              posts: user.posts,
              wins: user.wins,
              losses: user.losses,
              draws: 0,
              bio: user.bio,
            }
          }
        )
    })
  }
})
router.get('/:username', (req, res) => {

  User.findOne(
    {
      username: req.params.username
    },
    (err, user) => {
      if (err) {
        return res.json(
          {
            success: false,
            message: 'SERVER ERROR'
          }
        )
      }
      if (!user) {
        return res.json(
          {
            success: false,
            message: 'No user found with that name'
          }
        )
      }
      else {

        return res.json(
          {
            success: true,
            data:
            {
              image: user.profile_pic,
              friends: user.getFriends(4),
              priceData: user.priceData,
              posts: user.posts,
              wins: user.wins,
              losses: user.losses,
              draws: 0,
              bio: user.bio,
              loggedIn:true,
              id:user._id
            }
          }
        )
      }
    }
  )

})
router.get('/recommended_friends', notLoggedIn, (req, res) => {
  var currentUserId = req.session.user_id;
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
