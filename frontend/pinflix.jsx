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
var PinsForm = require('./components/pins/pins_form');
var PinsDetail = require('./components/pins/pins_detail');

var BoardsIndex = require('./components/boards/boards_index');
var BoardsForm = require('./components/boards/boards_form');
var BoardsEdit = require('./components/boards/boards_edit');
var BoardsDetail = require('./components/boards/boards_detail');

var CommentsIndex = require('./components/comments/comments_index');

var App = require('./components/app.jsx');


function _ensureLoggedOut(nextState, replace, callback) {
  if(CurrentUserStore.userHasBeenFetched()){
    _redirectIfLoggedIn();
  } else {
    SessionsApiUtil.fetchCurrentUser(_redirectIfLoggedIn);
  }

  function _redirectIfLoggedIn() {
    if (CurrentUserStore.isLoggedIn()) {
       replace({}, '/');
    }
    callback();
  }
}

function _ensureLoggedIn(nextState, replace, callback) {

  if(CurrentUserStore.userHasBeenFetched()){
    _redirectIfNotLoggedIn();
  } else {

    SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  }

  function _redirectIfNotLoggedIn() {

    if (!CurrentUserStore.isLoggedIn()) {
       replace({}, '/session/new');
    }
    callback();
  }
}

var router = (
  <Router>
    <Route path="session/new" component={SessionForm} onEnter={_ensureLoggedOut} />
    <Route path="users/new" component={UsersForm} />
    <Route path="/" component={App} onEnter={_ensureLoggedIn}>
      <IndexRoute component={PinsIndex} />
      <Route path="users/:user_id" component={BoardsIndex} />
      <Route path="boards/new" component={BoardsForm} />
      <Route path="boards/:board_id" component={BoardsDetail} />
      <Route path="boards/edit/:board_id" component={BoardsEdit} />
      <Route path="pins/new" component={PinsForm} />
      <Route path="pins/new/:pin_id" component={PinsForm} />
      <Route path="pins/:pin_id" component={PinsDetail} />
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById('root'));
});
