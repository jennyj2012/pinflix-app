var CurrentUserActions = require("./../actions/current_user_actions");

var UsersApiUtil = {

  createUser: function (credentials, callback) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        if(callback){ callback(); }
      }
    });
  },



};

module.exports = UsersApiUtil;
