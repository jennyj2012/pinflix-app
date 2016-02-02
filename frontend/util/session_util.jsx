var CurrentUserActions = require("./../actions/current_user_actions");

var SessionsApiUtil = {

  fetchCurrentUser: function (callback) {

    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
          if(callback){ callback(currentUser); }
      }
    });
  },

  login: function (credentials, callback) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        if(callback){ callback(); }
      }
    });
  },

  logout: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function (currentUser) {
        console.log("removed current user from controller: " + currentUser.username);
        CurrentUserActions.removeCurrentUser(currentUser);
        if(callback){ callback(); }
      }
    });
  }

};

module.exports = SessionsApiUtil;
