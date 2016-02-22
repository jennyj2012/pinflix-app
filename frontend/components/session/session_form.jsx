var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var Footer = require('../footer/footer');

var SessionApiUtil = require('../../util/session_util');
var CurrentUserStore = require("../../stores/current_user_store");

var SessionForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return {username: "", password: ""};
  },

  render: function () {
    // <p className="errors">Fill out all data</p>

    return (
      <div>
        <div className="log-in basic-modal" onSubmit={this.handleSubmit}>
          <form>
            <h1>Log In to PinFlix</h1>
            <p>PinFlix is a movie discovery web application inspired by Pinterest</p>

            <div className="input username required">
              <input
                type="text"
                name="user[username]"
                id="user_username"
                placeholder="Username"
                valueLink={this.linkState('username')}/>
            </div>

            <div className="input password required">
              <input
                type="password"
                name="user[password]"
                id="user_password"
                placeholder="Password"
                valueLink={this.linkState('password')}/>
            </div>

            <div className="division"></div>

            <div className="action-links group">
              <div className="shade-button">
                <button>Log In</button>
              </div>
              <div className="guest-and-link">
                <a href="#/users/new">Sign up now</a>
                <div className="guest-sign-in shade-button">
                  <button onClick={this.handleGuest}>Guest Sign In</button>
                </div>
              </div>
            </div>

          </form>
        </div>

        <Footer />
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if(this.state.username === ""){
      $(".username").addClass("invalid");
    } else if(this.state.password === ""){
      $(".password").addClass("invalid");
    } else {
      var credentials = $(e.target).serializeJSON();
      SessionApiUtil.login(credentials, function () {
        this.history.pushState({}, "/");
      }.bind(this));
    }
  },

  handleGuest: function(e) {
    e.preventDefault();
    var credentials = {user: {username: "Guest", password: "pinflixguest"} };
    if(this.isMounted()) {
      this.setState(credentials);
    }
    SessionApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  }

});

module.exports = SessionForm;
