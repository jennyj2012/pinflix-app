var React = require('react');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');
var PinsIndexItem = require('../pins/pins_index_item');
var CurrentUserStore = require('../../stores/current_user_store');
var SessionApiUtil = require('../../util/session_util');

var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');

var Masonry = require('react-masonry-component');
var masonryOptions = {
  transitionDuration: '0.2s',
  isFitWidth: true,
  itemSelector: '.index-item',
  columnWidth: '.index-item',
  isResizable: true,
  isAnimated: true
};

var BoardsIndexItem = React.createClass({
  getInitialState: function (){
    return {board: {}, boardPins: [], isCurrent: false, loaded: false};
  },

  componentDidMount: function (){
    SessionApiUtil.fetchCurrentUser();

    this.boardDetailListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchSingleBoard(this.props.params.board_id);

    this.pinListener = PinsStore.addListener(this.__onChange);
    PinsUtil.fetchAllPins();
  },

  componentWillReceiveProps: function(nextProps) {
    var boardId = parseInt(nextProps.params.board_id);
    BoardsUtil.fetchSingleBoard(boardId, this.__onChange);
  },

  componentWillUnMount: function (){
    this.boardDetailListener.remove();
    this.pinListener.remove();
  },

  __onChange: function (id){
    var boardId;
    if(id){
      boardId = id;
    } else {
      boardId = parseInt(this.props.params.board_id);
    }

    var currentBoard = BoardsStore.find(boardId);
    var currentPins = PinsStore.findByBoardId(boardId);
    var currentUser = CurrentUserStore.currentUser();
    var isCurrent = false;

    if (typeof currentBoard !== "undefined" && currentBoard.author_id === currentUser.id){
      isCurrent = true;
    }

    if(this.isMounted()) {
      this.setState({
        board: currentBoard,
        boardPins: currentPins,
        isCurrent: isCurrent,
        loaded: true
      });
    }
  },

  render: function () {
    var board = this.state.board;
    var boardTitle = "";
    var boardDescription = "";
    var boardAuthor = "";
    var editButton = [];
    var createPin = [];


    if(typeof board.title !== "undefined"){
      boardTitle = board.title;
    }

    if(typeof board.description !== "undefined"){
      boardDescription = board.description;
    }

    if(typeof board.description !== "undefined"){
      boardDescription = board.description;
    }

    if(typeof board.author !== "undefined" && typeof board.author.username !== "undefined"){
      boardAuthor = "By: " + board.author.username;
    }

    var boardPins = this.state.boardPins.map(function (pin) {
        return <PinsIndexItem key={pin.id} pin={pin} showComments={true} />;
      });

    if(this.state.isCurrent){
      editButton = (
        <div className="button-style-link right">
            <a href={"#/boards/edit/" + board.id}>Edit</a>
        </div>
      );

      createPin = (
        <div className="new-create-link index-item" >
          <a href='#/pins/new'>
            Add Pin
          </a>
        </div>
      );
    }

    //loading div
    var content;
    if (!this.state.loaded){
      content = <h2>"Loading"</h2>;
    } else {
      content = (
        <div className="board-index">
          <div className="info group">
            <h1>{boardTitle}</h1>
            <h2 >{boardAuthor}</h2>
            <h4>{boardDescription}</h4>
            <p>Pin count: {this.state.boardPins.length}</p>
            {editButton}
          </div>

          <div className="group">
            <Masonry
            className={'grid my-gallery-class masonry-container transitions-enabled infinite-scroll centered clearfix'} // default ''
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            >
              {createPin}
              {boardPins}
            </Masonry>
          </div>

        </div>
      );
    }

    return content;
  }
});

module.exports = BoardsIndexItem;
