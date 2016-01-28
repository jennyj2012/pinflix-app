var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var PinsIndex = require('./components/pins/pins_index');
var CommentsIndex = require('./components/comments/comments_index');

// var App = require('./components/app.jsx');


// var routes = (
//   <Route path="/" component={App}>
//     <Route path=":pinId" component={PinsIndex}>
//       <Route component={CommentsIndex} />
//     </Route>
//   </Route>
// );
//

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<PinsIndex/>, document.getElementById('root'));
});
