const { User } = require('../../models');
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.removeUser = removeUser;

// async function getUsers(req, res, next) {
//   try {
//     const data = await User.search(req.query);
//     res.json(createResponse(res, data));
//   } catch (e) {
//     next(e);
//   }
// }

function getUsers(req, res) {
  User.find({}, function(err, users) {
    if(err) throw err;
    res.json(users);
  });
}

function getUser(req, res, next) {
  const { id } = req.params;
  User.findById(id, function(err, user) {
    if (err) res.json('해당하는 ID를 찾을 수 없습니다.');
    res.json(user);
  })

}

function createUser(req, res, next) {
  const { body } = req;
  var newUser = User({
    userId: body.userId,
    userPassword: body.userPassword
  });

  newUser.save(function(err, user) {
    if (err) res.json('유저를 만드는 데 실패하였습니다.');
    res.json(user);
  });
}

function updateUser(req, res, next) {
  const { body } = req;
  const { id } = req.params;
  User.findById(id, function(err, user) {
    if (err) {
      res.json('해당하는 ID를 찾을 수 없습니다.');
      return;
    }  
    if(body.userId) {
      user.userId = body.userId;
    }
    if(body.userPassword) {
      user.userPassword = body.userPassword;
    }
    user.save(function(errs) {
      if (errs) {
        res.json('유저를 수정하는 데 실패하였습니다.');
        return;
      }
      res.json(user);
    });
  });
}

function removeUser(req, res, next) {
  const { id } = req.params;
  
  User.findById(id, function(err, user) {
    if (err) {
      res.json('해당하는 ID를 찾을 수 없습니다.');
      return;
    }
    if (user) {
    user.remove(function(errs) {
        if (errs) {
          res.json('유저를 삭제하는 데 실패하였습니다.');
          return;  
        }
        res.json('유저를 삭제하였습니다.');
      });
    }
    else {
      res.json('error')
    }
  });
}
