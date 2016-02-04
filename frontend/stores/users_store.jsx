var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/uuser_constants');

var UserStore = new Store(Dispatcher);

var _user = {};
var _userHasBeenFetched = false;

UserStore.user = function () {
  return $.extend({}, _user);
};

UserStore.isLoggedIn = function () {
  return !!_user.id;
};

UserStore.userHasBeenFetched = function () {
  return _userHasBeenFetched;
};

UserStore.__onDispatch = function (payload) {
  if (payload.actionType === UserConstants.RECEIVE_CURRENT_USER) {
    _userHasBeenFetched = true;
    _user = payload.user;
    UserStore.__emitChange();
  }
  else if (payload.actionType === UserConstants.REMOVE_CURRENT_USER) {
    _userHasBeenFetched = false;
    _user = {};
    UserStore.__emitChange();
  }
};

module.exports = UserStore;
