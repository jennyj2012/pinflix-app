var React = require('react');
var History = require('react-router').History;
var CurrentUserStore = require('../../stores/current_user_store');

var SearchBar = require('./search');
var SessionApiUtil = require('../../util/session_util');

var Header = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { currentUser: {} };
  },

  componentDidMount: function () {
    this.headerListener = CurrentUserStore.addListener(this._onChange);
  },

  componentWillUnMount: function () {
    this.headerListener.remove();
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

    return(
      <div  className="header group">
        <div className ="header-center">
          <div  className="header-left">
            <div className="logo"></div>
            <SearchBar/>
            <div className="tags"></div>
          </div>

          <div className="header-right">
            <div className="user-menu user-link" >
              <a href='#/boards'>{this.state.currentUser.username}</a>
            </div>

            <div className="logout basic-red-button">
              <button onClick={this.logout}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
