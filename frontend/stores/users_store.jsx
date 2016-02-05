var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UsersStore = new Store(Dispatcher);

var _users = [];

var resetUsers = function(users){
  _users = users;
};

var addUser = function(user){
  _users.push(user);
};

var updateUser = function(user){
  var idx;
  for(var i = 0; i < _users.length; i++){
    if(_users[i].id === user.id){
      idx = i;
    }
  }

  if(typeof idx === "undefined"){
    addUser(user);
  } else {
    _users[idx] = user;
  }
};

UsersStore.all = function () {
  return _users.slice();
};

UsersStore.find = function (id) {
  // debugger
  var idx;
  for(var i = 0; i < _users.length; i++){
    if(_users[i].id === id){
      idx = i;
    }
  }
  return _users[idx];
};

UsersStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_SINGLE_USER:
      updateUser(payload.user);
      UsersStore.__emitChange();
      break;
    default:
      break;
  }


};

module.exports = UsersStore;
