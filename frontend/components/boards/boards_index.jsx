var React = require('react');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');
var BoardsIndexItem = require('./boards_index_item');

var BoardsIndex = React.createClass({
  getInitialState: function (){
    return {allBoards: []};
  },

  componentDidMount: function (){
    this.boardListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchAllBoards();
  },

  componentWillUnMount: function (){
    this.boardListener.remove();
  },

  __onChange: function (){
    this.setState({ allBoards: BoardsStore.all() });
  },

  render: function () {
    var boards = this.state.allBoards.map(function (board) {
      return <BoardsIndexItem key={board.id} board={board}></BoardsIndexItem>;
    });
    return (
      <div className="user-board-page group">
        {boards}
      </div>
    );
  }
});

module.exports = BoardsIndex;
