var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var CurrentUserStore = new Store(Dispatcher);

var _currentUser = {};
var _currentUserHasBeenFetched = false;

CurrentUserStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

CurrentUserStore.isLoggedIn = function () {
  return !!_currentUser.id;
};

CurrentUserStore.userHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

CurrentUserStore.__onDispatch = function (payload) {
  if (payload.actionType === CurrentUserConstants.RECEIVE_CURRENT_USER) {
    _currentUserHasBeenFetched = true;
    _currentUser = payload.currentUser;
    // debugger
    CurrentUserStore.__emitChange();
  }
  else if (payload.actionType === CurrentUserConstants.REMOVE_CURRENT_USER) {
    _currentUserHasBeenFetched = false;
    _currentUser = {};
    CurrentUserStore.__emitChange();
  }
};

module.exports = CurrentUserStore;
