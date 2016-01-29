var CurrentUserActions = require("./../actions/current_user_actions");

var SessionsApiUtil = {

  fetchCurrentUser: function (cb) {
    $.ajax({
      url: '/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        console.log("fetched current user!");
        CurrentUserActions.receiveCurrentUser(currentUser);
          if(cb){ cb(currentUser); }
      }
    });
  },

  login: function (credentials, success) {
    $.ajax({
      url: '/session',
      type: 'POST',
      dataType: 'json',
      data: credentials, // {email: "tommy...", password: "14.."}
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        if(success){ success(); }

      }

    });
  },

  logout: function () {
    $.ajax({
      url: '/session',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        console.log("logged out!");
      }
    });
  }

};

module.exports = SessionsApiUtil;
