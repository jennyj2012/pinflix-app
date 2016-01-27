var React = require('react');
var ReactDOM = require('react-dom');
var PinsIndex = require('./components/pins_index');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<PinsIndex/>, document.getElementById('root'));
});
