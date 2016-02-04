var React = require('react');
var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');
var PinsIndexItem = require('./pins_index_item');

var CurrentUserStore = require("../../stores/current_user_store");
var Masonry = require('react-masonry-component')(React);
var masonryOptions = {
  transitionDuration: '0.2s',
  itemSelector: '.pin',
  columnWidth: '.pin',
  isResizable: true
};

var PinsIndex = React.createClass({
  getInitialState: function (){
    return {allPins: []};
  },

  componentDidMount: function (){
    this.pinListener = PinsStore.addListener(this.__onChange);
    PinsUtil.fetchAllPins();
  },

  componentWillUnMount: function (){
    this.pinListener.remove();
  },

  __onChange: function (){
    this.setState({ allPins: PinsStore.all() });
  },

  render: function () {

    var pins = this.state.allPins.map(function (pin) {
        return <PinsIndexItem key={pin.id} pin={pin} showComments={false}/>;
    });

    return (
      <div className="landing-page">
        <Masonry className="masonry-container transitions-enabled infinite-scroll centered clearfix">
        {pins}
        </Masonry>
      </div>
    );
  }

});

module.exports = PinsIndex;
