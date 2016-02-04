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

  fetchSingleUser: function (id, callback) {
    $.ajax({
      url: '/api/users/',
      type: 'GET',
      dataType: 'json',
      success: function (user) {
        UserActions.receiveSingleUser(user);
          if(callback){ callback(); }
      }
    });
  },

};

module.exports = UsersApiUtil;
