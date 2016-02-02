var React = require('react');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');
var PinsIndexItem = require('../pins/pins_index_item');

var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');

var BoardsIndexItem = React.createClass({
  getInitialState: function (){
    return {board: {}, boardPins: []};
  },

  componentDidMount: function (){
    this.boardDetailListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchSingleBoard(this.props.params.board_id);

    this.pinListener = PinsStore.addListener(this.__onChange);
    PinsUtil.fetchAllPins();
  },

  componentWillUnMount: function (){
    this.boardDetailListener.remove();
    this.pinListener.remove();
  },

  __onChange: function (){
    var boardId = parseInt(this.props.params.board_id);
    var currentBoard = BoardsStore.find(boardId);
    var currentPins = PinsStore.findByBoardId(boardId);
    this.setState({ board: currentBoard, boardPins: currentPins });
  },

  render: function () {
    var board = this.state.board;
    var board_pins;

    if(typeof board.pins === "undefined"){
      board_pins = [];
    } else {
      board_pins = this.state.boardPins.map(function (pin) {
          return <PinsIndexItem key={pin.id} pin={pin} showComments={true} />;
        });
    }

    return (
      <div className="board-index index-item group">
        <div className="new-create-link">
        <a href='#/pins/new'>
          Add Pin
        </a>
        </div>

        <div id="masonry-container" className="landing-page transitions-enabled infinite-scroll clearfix">
          {board_pins}
        </div>

      </div>
    );
  }
});

module.exports = BoardsIndexItem;
