var React = require('react');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');
var BoardsIndexItem = require('./boards_index_item');
// var UsersUtil = require('../../users_util');

var BoardsIndex = React.createClass({
  getInitialState: function (){
    return {allBoards: []};
  },

  componentDidMount: function (){
    this.boardListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchAllBoards();
  },

  componentWillReceiveProps: function(nextProps) {
    var userId = parseInt(nextProps.params.user_id);
    // UsersUtil.fetchSingleUser(this.__onChange);
  },

  componentWillUnMount: function (){
    this.boardListener.remove();
  },

  __onChange: function (id){
    var userId;
    if(id){
      userId = id;
    } else {
      userId = parseInt(this.props.params.user_id);
    }
    this.setState({ allBoards: BoardsStore.findByUserId(userId) });
  },

  render: function () {
    var boards = this.state.allBoards.map(function (board) {
      return <BoardsIndexItem key={board.id} board={board}></BoardsIndexItem>;
    });


    return (
      <div className="user-board-page group">
        <div className="new-create-link">
          <a href='#/boards/new'>
            Add Board
          </a>
        </div>

        {boards}
      </div>
    );
  }
});

module.exports = BoardsIndex;
