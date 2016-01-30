var React = require('react');
var SessionApiUtil = require('./../util/session_util');
var CurrentUserStore = require("./../stores/current_user_store");


var App = React.createClass({
  componentDidMount: function () {
    CurrentUserStore.addListener(this.forceUpdate.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },
  render: function () {
    // if (!CurrentUserStore.userHasBeenFetched()) {
    //   return <p>PLEASE WAIT</p>;
    // } else {
      return(
        <div>
          { this.props.children }
        </div>
      );
    }
  // }
});

module.exports = App;
