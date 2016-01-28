var React = require('react');
var CommentsIndexItem = require('./comments_index_item');
// var PinsUtil = require('../../util/pins_util');
// var PinsStore = require('../../stores/pins_store');

var CommentsIndex = React.createClass({
  // getStateFromStore: function () {
  // var updatedPin = PinsStore.find(this.props.pin.id);
  //
  // return updatedPin;
  // },
  //
  // _onChange: function () {
  //   this.setState(this.getStateFromStore());
  // },
  //
  // getInitialState: function () {
  //   return this.getStateFromStore();
  // },
  //
  // componentDidMount: function () {
  //   this.pinListener = PinsStore.addListener(this._onChange);
  // },
  //
  // componentWillUnmount: function () {
  //   this.pinListener.remove();
  // },


  render: function () {
    // this.updatedPin
    // this.state.
    // this.pins.comments
    var comments = this.props.comments.map(function (comment) {
      return <CommentsIndexItem key={comment.id} comment={comment}></CommentsIndexItem>;
    });

    return (
      <div>
        <div className="divison"></div>
        {comments}
      </div>
    );
  }
});

module.exports = CommentsIndex;
