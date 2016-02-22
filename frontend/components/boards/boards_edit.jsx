var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var CurrentUserStore = require('../../stores/current_user_store');
var PinsIndexItem = require('../pins/pins_index_item');

var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');

var Masonry = require('react-masonry-component');
var masonryOptions = {
  transitionDuration: '0',
  isFitWidth: true
};
var BoardsEdit = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      board: {},
      author_id: null,
      title: "",
      description: "",
    };
  },

  componentDidMount: function () {
    this.boardListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchSingleBoard(this.props.params.board_id);
  },

  componentWillUnMount: function (){
    this.boardDetailListener.remove();
  },

  updateDescription: function(e){
    if(this.isMounted()) {
      this.setState({description: e.currentTarget.value});
    }
  },

  __onChange: function (id){
    var boardId;

    if(id){
      boardId = id;
    } else {
      boardId = parseInt(this.props.params.board_id);
    }

    var board = BoardsStore.find(boardId);
    var user = CurrentUserStore.currentUser();
    if(typeof board !== "undefined" && board.author_id === user.id){
      if(this.isMounted()) {
        this.setState({
          board: board,
          author_id: board.author_id,
          title: board.title,
          description: board.description});
        }
    }
  },

   render: function () {
    var buttons = [];
    var board = this.state.board;
    var user = CurrentUserStore.currentUser();
    var authorId = this.state.author_id;
    var pins = [];

    if(typeof authorId !== "undefined" && authorId === user.id){
      buttons = (
        <div className="page">
          <div className="small-red-button" onClick={this.handleEdit}>
            <button>Edit Board</button>
          </div>
          <div className="small-red-button" onClick={this.handleDelete}>
            <button>Delete Board</button>
          </div>
        </div>
      );
    }

    if(typeof board.id !== "undefined"){
      pins = board.pins.map(function (pin){
        return <PinsIndexItem key={pin.id} pin={pin} showComments={true}/>;
      });
    }

    return(
      <div className="board-edit" >
        <form className="form basic-modal group" >
          <h1>{this.state.title}</h1>
          <h2>Edit Board</h2>
          <div className="input required">
            <input
              type="text"
              className="board[title]"
              id="board_title"
              placeholder="Board Name"
              valueLink={this.linkState('title')} />
          </div>

          <textarea
            className="board[description]"
            id="board_description"
            placeholder="Add a description"
            onChange={this.updateDescription}
            value={this.state.description}></textarea>

          {buttons}
        </form>

        <div>
          <h2>Pins In this Board</h2>
            <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            >
              {pins}
            </Masonry>
        </div>
      </div>
    );
  },

  handleEdit: function(e) {
    e.preventDefault();
    debugger
    if(this.state.title === ""){
      $(".required").addClass("invalid");
    } else {
      var data = {board: {title: this.state.title, description: this.state.description} };
      BoardsUtil.updateBoard(this.state.board.id, data, function (board_id) {
        this.history.pushState({}, "/boards/" + board_id);
      }.bind(this));
    }
  },

  handleDelete: function(e) {
    e.preventDefault();
    //upon creation call success callback in BoardsUtil.
    BoardsUtil.deleteBoard(this.state.board.id, function (user_id) {
      this.history.pushState({}, "/users/" + user_id);
    }.bind(this));

  }

});

module.exports = BoardsEdit;
