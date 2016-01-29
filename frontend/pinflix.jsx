var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var History = require('react-router').History;

var UsersForm = require('./components/users/users_form');
var SessionForm = require('./components/session/session_form');
var CurrentUserStore = require('./stores/current_user_store');
var SessionsApiUtil = require('./util/session_util');

var PinsIndex = require('./components/pins/pins_index');
var BoardsIndex = require('./components/boards/boards_index');
var CommentsIndex = require('./components/comments/comments_index');

var App = require('./components/app.jsx');


var router = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={PinsIndex} onEnter={requireAuth}/>
      <Route path="session/new" component={SessionForm} />
      <Route path="users/new" component={UsersForm} />
      <Route path="pins" component={PinsIndex} />
    </Route>
  </Router>
);

function requireAuth(nextState, replace, callback) {
  if(CurrentUserStore.userHasBeenFetched()){
    _redirectIfNotLoggedIn();
  }else{
    SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn(replace, callback));
  }
}

function _redirectIfNotLoggedIn(replace, callback) {
  if (!CurrentUserStore.isLoggedIn()) {
     replace({}, '/session/new');
  }
  callback();
 }


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById('root'));
});
