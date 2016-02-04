var React = require('react');
var UserStore = require('../../stores/boards_store');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/users_store');
var BoardsIndexItem = require('./boards_index_item');
var UsersUtil = require('../../util/users_util');


var BoardsIndex = React.createClass({
  getInitialState: function (){
    return {allBoards: [], user: {}};
  },

  componentDidMount: function (){
    this.boardListener = BoardsStore.addListener(this.__onChange);
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
    this.setState({
      allBoards: BoardsStore.findByUserId(userId),
      user: UserStore.find(userId)});
  },

  render: function () {
    var boards = this.state.allBoards.map(function (board) {
      return <BoardsIndexItem key={board.id} board={board}></BoardsIndexItem>;
    });

    var user = "anonymous";
    if(typeof this.state.user !== "undefined"){
      user = this.state.user.username;
    }

    return (
      <div className="user-board-page group">
        <h2>{user}</h2>
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
