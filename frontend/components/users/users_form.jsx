var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var SessionApiUtil = require('../../util/session_util');
var UsersApiUtil = require('../../util/users_util');
var Footer = require('../footer/footer');


var UserForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return {username: "", email: "", password: ""};
  },

  render: function () {
    // <p className="errors">Fill out all data</p>
    return (
      <div>
        <div className="sign-up">
          <div className="log-in-button button-style-link">
              <a href="#/session/new">Log in</a>
          </div>

        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up for PinFlix</h1>
          <p>Join PinFlix and discover and save movie ideas.</p>
          <p>PinFlix is a Pinterest clone.</p>

          <div className="input username required">
            <input
              type="text"
              name="user[username]"
              id="user_username"
              placeholder="Username"
              valueLink={this.linkState('username')}
              />
          </div>

          <div className="input email required">
            <input
              type="text"
              name="user[email]"
              id="user_email"
              valueLink={this.linkState('email')}
              placeholder="Email"/>
          </div>

        <div className="input password required">
            <input
              type="password"
              name="user[password]"
              id="user_password"
              valueLink={this.linkState('password')}
              placeholder="Password"/>
          </div>


          <div className="sign-up-button shade-button">
            <input id="button-style-input" type="submit" value="Sign Up"/>
          </div>

          <div className="sign-up-button shade-button">
            <button onClick={this.handleGuest}>Guest Sign In</button>
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
    } else if(this.state.email === ""){
      $(".email").addClass("invalid");
    } else {
      var credentials = $(e.target).serializeJSON();
      UsersApiUtil.createUser(credentials, function () {
        this.history.pushState({}, "/");
      }.bind(this));
    }
  },

  handleGuest: function(e) {
    e.preventDefault();
    var credentials = {user: {username: "Guest", password: "pinflixguest"} };
    this.setState(credentials);
    SessionApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  }
});

module.exports = UserForm;
