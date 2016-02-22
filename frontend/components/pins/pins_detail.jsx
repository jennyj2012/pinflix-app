var React = require('react');
var PinsIndexItem = require('./pins_index_item');

var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');

var PinsDetail = React.createClass({
  getInitialState: function (){
    return {pin: {}};
  },

  componentDidMount: function (){
    this.pinListener = PinsStore.addListener(this.__onChange);
    PinsUtil.fetchSinglePin(this.props.params.pin_id);
  },

  componentWillReceiveProps: function(nextProps) {
    var pinId = parseInt(nextProps.params.pin_id);
    PinsUtil.fetchSinglePin(pinId, this.__onChange);
  },

  componentWillUnMount: function (){
    this.pinListener.remove();
  },

  __onChange: function (id){
    var pinId;
    if(id){
      pinId = id;
    } else {
      pinId = parseInt(this.props.params.pin_id);
    }

    if(this.isMounted()) {
      this.setState({ pin: PinsStore.find(pinId) });
    }
  },

  render: function () {
    var pin = this.state.pin;
    var pinComponent = [];

    if(typeof pin.id !== "undefined"){
      pinComponent = <PinsIndexItem key={pin.id} pin={pin} showComments={true} />;
    }

    return (
      <div className="pin-detail">
      <div className="info">
      <h2>Pin Detail</h2>
      </div>
        <div className="detail">
        {pinComponent}
        </div>
      </div>
    );
  }
});

module.exports = PinsDetail;
