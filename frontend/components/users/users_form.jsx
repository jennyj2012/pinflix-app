var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var SessionApiUtil = require('../../util/session_util');
var UsersApiUtil = require('../../util/users_util');


var UserForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return {username: "", email: "", password: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var credentials = $(e.target).serializeJSON();
    UsersApiUtil.createUser(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  handleGuest: function(e) {
    e.preventDefault();
    var credentials = {user: {username: "test", password: "testing"} };
    SessionApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function () {
    // <p className="errors">Fill out all data</p>
    return (
      <div className="sign-up basic-modal" onSubmit={this.handleSubmit}>

        <div className="log-in-button user-menu">
            <a href="#/session/new">Log in</a>
        </div>

      <form action="<%= users_url %>" method="post">
        <h1>Sign Up for PinFlix</h1>
        <p>Join PinFlix and discover and save movie ideas.</p>
        <p>PinFlix is a Pinterest clone.</p>

        <div className="input">
          <input
            type="text"
            name="user[username]"
            id="user_username"
            placeholder="Username"
            valueLink={this.linkState('username')}/>
        </div>

        <div className="input">
          <input
            type="text"
            name="user[email]"
            id="user_email"
            placeholder="Email"
            valueLink={this.linkState('email')}/>
        </div>

        <div className="input">
          <input
            type="password"
            name="user[password]"
            id="user_password"
            placeholder="Password"
            valueLink={this.linkState('password')}/>
        </div>

        <div className="sign-up-button shade-button">
          <button>Sign Up</button>
        </div>

        <div className="sign-up-button shade-button">
          <button onClick={this.handleGuest}>Guest Sign In</button>
        </div>

      </form>
      </div>
    );
  }
});

module.exports = UserForm;
