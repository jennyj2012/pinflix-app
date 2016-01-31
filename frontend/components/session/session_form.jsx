var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var SessionApiUtil = require('../../util/session_util');
var CurrentUserStore = require("../../stores/current_user_store");

var SessionForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return {username: "", password: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var credentials = $(e.target).serializeJSON();
    SessionApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function () {
    // <p className="errors">Fill out all data</p>

    return (
      <div className="log-in basic-modal" onSubmit={this.handleSubmit}>
        <form>
          <h1>Log In to PinFlix</h1>
          <p>PinFlix is a movie discovery web application inspired by Pinterest</p>

          <div className="input">
            <input type="text" name="user[username]" id="user_username" placeholder="Username" valueLink={this.linkState('username')}></input>
          </div>
          <div className="input">
            <input type="password" name="user[password]" id="user_password" placeholder="Password" valueLink={this.linkState('password')}></input>
          </div>

          <div className="division"></div>

          <div className="action-links group">
            <a href="#/users/new">Sign up now</a>
            <div className="shade-button">
              <button>Log In</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
});

module.exports = SessionForm;
