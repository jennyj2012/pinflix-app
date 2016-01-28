var React = require('react');
var PinsEdit = require('./pins_edit');

var PinsDetail = React.createClass({
  render: function () {
    var pin = this.props.pin;
    return (
      <div className="pin-detail">
      </div>
    );
  }
});

module.exports = PinsDetail;
