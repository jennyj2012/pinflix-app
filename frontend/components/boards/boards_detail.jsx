var React = require('react');
var PinsIndex = require('../pins/pins_index');

var BoardsIndexItem = React.createClass({

  render: function () {
    var board = this.props.board;

    return (
      <div className="board-index index-item group">
        <div className="new-create-link">
        <a href='#/pins/new'>
          Add Pin
        </a>
        </div>
      <PinsIndex/>
      </div>
    );
  }
});

module.exports = BoardsIndexItem;
