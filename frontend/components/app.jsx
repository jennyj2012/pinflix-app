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

    return(
      <div>
        <Header/>
        <div className="content group">
          { this.props.children }
        </div>
      </div>
    );
  }

});

module.exports = App;
