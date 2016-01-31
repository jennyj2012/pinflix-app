var React = require('react');
var SessionApiUtil = require('./../util/session_util');
var CurrentUserStore = require('./../stores/current_user_store');
var Header = require('./header/header');


var App = React.createClass({
  componentDidMount: function () {
    this.current_user_listener = CurrentUserStore.addListener(this.forceUpdate.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },

  render: function () {
    var fetched, logged;
    if (CurrentUserStore.userHasBeenFetched()){
      fetched = "true";
    }else {
      fetched = "false";
    }
    if (CurrentUserStore.isLoggedIn()){
      logged = "true";
    }else {
      logged = "false";
    }
    return(
      <div>
        <h2> App Userfetched? {fetched}  App UserLoggedIn? {logged}</h2>
        <Header/>
        { this.props.children }
      </div>
    );
  }

});

module.exports = App;
