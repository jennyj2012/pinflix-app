var React = require('react');
var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');
var PinsIndexItem = require('../pins/pins_index_item');
var CurrentUserStore = require('../../stores/current_user_store');

var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');

var Masonry = require('react-masonry-component');
var masonryOptions = {
  transitionDuration: '0',
  isFitWidth: true
};

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
    this.setState({ board: currentBoard, boardPins: currentPins });
  },

  render: function () {
    var board = this.state.board;
    var board_title = "Unknown Board";
    var board_description = "";
    var board_author = "anonymous";
    var user = CurrentUserStore.currentUser();
    var editButton = [];


    if(typeof board.title !== "undefined"){
      board_title = board.title;
    }

    if(typeof board.description !== "undefined"){
      board_description = board.description;
    }

    if(typeof board.author !== "undefined" && typeof board.author.username !== "undefined"){
      board_author = board.author.username;
    }

    var board_pins = this.state.boardPins.map(function (pin) {
        return <PinsIndexItem key={pin.id} pin={pin} showComments={true} />;
      });

    if(typeof board.author_id !== "undefined" && board.author_id === user.id){
      editButton = (
        <div className="button-style-link">
            <a href={"#/boards/edit/" + board.id}>Edit</a>
        </div>
        );
    }

    return (
      <div className="board-index">
        <h2>{board_title}</h2>
        <h4>{board_description}</h4>
        <h4>{board_author}</h4>
        {editButton}

        <div className="index-item group">
        <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        >
          <div className="new-create-link">
          <a href='#/pins/new'>
            Add Pin
          </a>
        </div>

        {board_pins}
        </Masonry>
        </div>

      </div>
    );
  }
});

module.exports = BoardsIndexItem;
