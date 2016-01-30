var React = require('react');
var SessionApiUtil = require('./../util/session_util');
var CurrentUserStore = require("./../stores/current_user_store");


var App = React.createClass({
  componentDidMount: function () {
    CurrentUserStore.addListener(this.forceUpdate.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },
  render: function () {
    return(
      <div>
        { this.props.children }
      </div>
    );
  }

});

module.exports = App;
