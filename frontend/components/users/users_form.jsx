var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var history = require('react-router').History;
// var UsersStore = require('../../stores/users_store');
// var UsersApiUtil = require('../../util/users_api_util');


var UserForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {username: "", email: "", password: ""};
  },

  handleSubmit: function(e){
    e.preventDefault();
    // ---Util.createPinComment(this.state.body, this.props.pin.id);
    // --Util url: users/new, type "post"
    this.setState({username: "", email: "", password: ""});
  },

  render: function () {
    // <p className="errors">Fill out all data</p>
    return (
      <div className="sign-up basic-modal" onSubmit={this.handleSubmit}>

        <div className="log-in-button button-style-link">
            <a href="/session/new">Log in</a>
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
            valueLink={this.linkState('username')}>
          </input>
        </div>
        <div className="input">
          <input
            type="text"
            name="user[email]"
            id="user_email"
            placeholder="Email"
            valueLink={this.linkState('email')}>
          </input>
        </div>
        <div className="input">
          <input
            type="password"
            name="user[password]"
            id="user_password"
            placeholder="Password"
            valueLink={this.linkState('password')}>
          </input>
        </div>

        <div className="sign-up-button shade-button">
          <button>Sign Up</button>
        </div>

      </form>
      </div>
    );
  }
});

module.exports = UserForm;
