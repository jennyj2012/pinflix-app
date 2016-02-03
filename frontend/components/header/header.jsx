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
      <div className="header group">
        <div className ="header-center group">

          <div className="header-left group">
            <div>
              <a href="#/" className="logo">

                <img src={window.pinflix.logo}/>
              </a>
            </div>

              <SearchBar/>
            <div className="search-button">
              <i className="fa fa-search"></i>
            </div>
            <div className="tags">

            </div>
          </div>

          <div className="header-right group">
            <div className="user-menu user-link" >
              <a href='#/boards'>{this.state.currentUser.username}</a>
            </div>

            <div className="logout">
              <button onClick={this.logout}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
