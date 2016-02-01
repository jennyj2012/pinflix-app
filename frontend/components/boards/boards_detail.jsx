var React = require('react');
var PinsIndex = require('../pins/pins_index');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');
var PinsIndexItem = require('../pins/pins_index_item');

var BoardsIndexItem = React.createClass({
  getInitialState: function (){
    return {board: {} };
  },

  componentDidMount: function (){
    this.boardDetailListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchSingleBoard(this.props.params.board_id);
  },

  componentWillUnMount: function (){
    this.boardDetailListener.remove();
  },

  __onChange: function (){
    var board_id = parseInt(this.props.params.board_id);
    var currentBoard = BoardsStore.find(board_id);
    this.setState({ board: currentBoard });
  },

  render: function () {
    var board = this.state.board;
    var pins = [];

    if(typeof board.pins !== "undefined"){
      pins = board.pins.map(function (pin) {
        return <PinsIndexItem key={pin.id} pin={pin}></PinsIndexItem>;
      });
    }
    return (
      <div className="board-index index-item group">
        <div className="new-create-link">
        <a href='#/pins/new'>
          Add Pin
        </a>
        </div>

        <div d="masonry-container" className="landing-page transitions-enabled infinite-scroll clearfix">
          {pins}
        </div>

      </div>
    );
  }
});

module.exports = BoardsIndexItem;
