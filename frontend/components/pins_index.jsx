var React = require('react');
var PinUtil = require('../util/pins_util');
var PinsStore = require('../stores/pins_store');

var PinsIndex = React.createClass({
  getInitialState: function (){
    return { userPins: [] };
  },
  componentDidMount: function (){
    this.pinListener = PinsStore.addListener(this.__onChange);
    debugger
    PinUtil.fetchPins();
  },
  componentWillUnMount: function (){
    this.pinListener.remove();
  },
  __onChange: function (){
    this.setState({ userPins: PinsStore.all() });
  },

  render: function () {
    return (
      <div>PinsIndex</div>
    );
  }
});

module.exports = PinsIndex;
