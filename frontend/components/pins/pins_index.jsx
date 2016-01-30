var React = require('react');
var PinUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');
var PinsIndexItem = require('./pins_index_item');

var SessionApiUtil = require('../../util/session_util');
var CurrentUserStore = require("../../stores/current_user_store");

var PinsIndex = React.createClass({
  getInitialState: function (){
    return {allPins: []};
  },

  componentDidMount: function (){
    // CurrentUserStore.addListener(this.forceUpdate.bind(this));
    // SessionApiUtil.fetchCurrentUser();
    debugger
    this.pinListener = PinsStore.addListener(this.__onChange);
    PinUtil.fetchAllPins();
  },

  componentWillUnMount: function (){
    this.pinListener.remove();
  },

  __onChange: function (){
    debugger
    this.setState({ allPins: PinsStore.all() });
  },

  render: function () {
    // debugger
    // if (!CurrentUserStore.userHasBeenFetched()) {
    //   return <p>PLEASE WAIT</p>;
    // } else {
    debugger
    var pins = this.state.allPins.map(function (pin) {
      return <PinsIndexItem key={pin.id} pin={pin}></PinsIndexItem>;
    });
    return (
      <div className="landing-page group">
        {pins}
      </div>
    );
  }
// }
});

module.exports = PinsIndex;
