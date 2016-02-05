var React = require('react');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');
var BoardsIndexItem = require('./boards_index_item');
var UsersStore = require('../../stores/users_store');
var UsersUtil = require('../../util/users_util');


var BoardsIndex = React.createClass({
  getInitialState: function (){
    return {allBoards: [], author: "anonymous"};
  },

  componentDidMount: function (){
    this.boardListener = BoardsStore.addListener(this.__onChange);
    UsersUtil.fetchSingleUser(this.props.params.user_id);
    BoardsUtil.fetchAllBoards();

  },

  componentWillReceiveProps: function(nextProps) {
    var userId = parseInt(nextProps.params.user_id);
    UsersUtil.fetchSingleUser(userId, this.__onChange);
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
    var user = UsersStore.find(userId);
    var username = "anonymous";
    if (user){
      username = user.username;
    }
    var boards = BoardsStore.findByUserId(userId);

    this.setState({
      allBoards: boards,
      author: username
    });
  },

  render: function () {
    var boards = this.state.allBoards.map(function (board) {
      return <BoardsIndexItem key={board.id} board={board}></BoardsIndexItem>;
    });

    return (
      <div className="user-board-page group">
        <h2>{this.state.author}</h2>
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
