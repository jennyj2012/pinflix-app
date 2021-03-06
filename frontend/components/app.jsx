var React = require('react');
var SessionApiUtil = require('./../util/session_util');
var CurrentUserStore = require('./../stores/current_user_store');
var Header = require('./header/header');
var Footer = require('./footer/footer');


var App = React.createClass({
  componentDidMount: function () {
    this.current_user_listener = CurrentUserStore.addListener(function () {
      if(this.isMounted()) { this.forceUpdate.bind(this) };
    }.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },

  render: function () {
    return(
      <div>
        <Header/>
        <div className="content group">
          { this.props.children }
        </div>
        <Footer/>
      </div>
    );
  }

});

module.exports = App;
