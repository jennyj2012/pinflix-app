var React = require('react');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');
var UsersStore = require('../../stores/users_store');
var UsersUtil = require('../../util/users_util');
var CurrentUserStore = require('../../stores/current_user_store');
var SessionApiUtil = require('../../util/session_util');

var BoardsIndexItem = require('./boards_index_item');

var Masonry = require('react-masonry-component');
var masonryOptions = {
  transitionDuration: '0.5s',
  isFitWidth: true,
  isResizable: true,
  isAnimated: true
};


var BoardsIndex = React.createClass({
  getInitialState: function (){
    return {allBoards: [], author: "", isCurrent: false};
  },

  componentDidMount: function (){
    SessionApiUtil.fetchCurrentUser();

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

    var boards = BoardsStore.findByUserId(userId);
    var user = UsersStore.find(userId);
    var username = "";
    var currentUser = CurrentUserStore.currentUser();
    var isCurrent = false;

    if (user && user.id === currentUser.id){
      username = user.username;
      isCurrent = true;
    } else if (user){
      username = user.username;
    }
    if(this.isMounted()) {
      this.setState({
        allBoards: boards,
        author: username,
        isCurrent: isCurrent
      });
    }
  },

  render: function () {
    var boards = this.state.allBoards.map(function (board) {
      return (
        <BoardsIndexItem
          key={board.id}
          board={board}
          isCurrent={this.state.isCurrent}>
        </BoardsIndexItem>
      );
    }.bind(this));

    var createBoard = [];
    if(this.state.isCurrent) {
      createBoard = (
        <div className="new-create-link">
          <a href='#/boards/new'>
            Add Board
          </a>
        </div>
      );
    }

    return (
      <div className="user-board-page group">
      <div className="info">
        <h2>{this.state.author} Account</h2>
      </div>
          {createBoard}
          {boards}
      </div>
    );
  }
});

module.exports = BoardsIndex;
