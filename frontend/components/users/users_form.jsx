var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var SessionApiUtil = require('../../util/session_util');
var UsersApiUtil = require('../../util/users_util');
var Footer = require('../footer/footer');
import { Form, Input } from 'react-form-validations';
import FormField from './FormField';


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

        <Form validators={this.validators} submit={this.handleSubmit}>
          <h1>Sign Up for PinFlix</h1>
          <p>Join PinFlix and discover and save movie ideas.</p>
          <p>PinFlix is a Pinterest clone.</p>

          <FormField className="input username required">
            <Input
              type="text"
              name="username"
              placeholder="Username"/>
          </FormField>

          <FormField className="input email required">
            <Input
              type="text"
              name="email"
              placeholder="Email"/>
          </FormField>

        <FormField className="input password required">
            <Input
              type="password"
              name="password"
              placeholder="Password"/>
          </FormField>


          <div className="sign-up-button shade-button">
            <input id="button-style-input" type="submit" value="Sign Up" />
          </div>

          <div className="sign-up-button shade-button">
            <button onClick={this.handleGuest}>Guest Sign In</button>
          </div>
        </Form>

      </div>

      <Footer />
      </div>
    );
  },

  handleSubmit: function(user) {
    UsersApiUtil.createUser({user}, function () {
      this.history.pushState({}, "/");
    }.bind(this));
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

UserForm.prototype.validators = {
  "username": ["presence"],
  "email": ["presence"],
  "password": [(field, values) => {
    const val = values[field];
    if (!val || val.length < 6) {
      return "must be at least 6 characters";
    } else {
      return "";
    }
  }]
};
