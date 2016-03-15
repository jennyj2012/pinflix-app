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
   if(this.isMounted()) {
     this.setState({currentUser: CurrentUserStore.currentUser()});
   }
 },

   render: function () {
    var user = this.state.currentUser;
    var userBoards;

    if(user){
      userBoards = "#/users/"+ user.id;
    } else {
      userBoards = "/";
    }

    return(
      <div className="header page">
        <div className ="header-center group inner-page">

          <div className="header-left group">
            <div>
              <a href="/" className="logo buttonbar">
                <img src={window.pinflix.logo}/>
              </a>
            </div>

              <SearchBar/>
          </div>

          <div className="header-right group">
            <div className="user-menu user-link" >
              <a className="group" href={userBoards}>
                <img className="user-pin" src={window.pinflix.pin}/>
                <h4>{this.state.currentUser.username}</h4>
            </a>
            </div>

            <div className="logout">
              <button onClick={this.logout}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  logout: function (e){
    e.preventDefault();
    SessionApiUtil.logout( function () {
      this.history.pushState({}, "/session/new");
    }.bind(this));
  }

});

module.exports = Header;
