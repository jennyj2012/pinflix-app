var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/current_user_constants');

var UserActions = {
  receiveSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_SINGLE_USER,
      user: user
    });
  },
  removeSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.REMOVE_SINGLE_USER,
      user: user
    });
  },

};

module.exports = UserActions;
