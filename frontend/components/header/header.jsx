var React = require('react');
var CurrentUserStore = require('../../stores/current_user_store');
var SearchBar = require('./search');
var SessionApiUtil = require('../../util/session_util');
var History = require('react-router').History;

var Header = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this._onChange);
  },

  _onChange: function () {
   this.setState({currentUser: CurrentUserStore.currentUser()});
 },

  logout: function (e){
    e.preventDefault();
    SessionApiUtil.logout( function () {
      this.history.pushState({}, "/session/new");
    }.bind(this));
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
        <h2> Header Userfetched? {fetched}  Header UserLoggedIn? {logged}</h2>
        <div  className="header group">
          <SearchBar/>
          <div className="logout basic-red-button">
            <button onClick={this.logout}>Log Out</button>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
