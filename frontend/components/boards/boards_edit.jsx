var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var CurrentUserStore = require('../../stores/current_user_store');


var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');

var BoardsEdit = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      id: null,
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
    this.setState({description: e.currentTarget.value});
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
    if(board.author_id === user.id){
      this.setState({ id: board.id, title: board.title, description: board.description});
    }
  },

   render: function () {

    return(
      <div className="board-edit" >
        <h1>{this.state.title}</h1>
        <h2>Edit Board</h2>
        <form className="form group" >
          <div className="input">
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

          <div className="small-red-button" onClick={this.handleEdit}>
            <button>Edit Board</button>
          </div>
          <div className="small-red-button" onClick={this.handleDelete}>
            <button>Delete Board</button>
          </div>
        </form>
      </div>
    );
  },

  handleEdit: function(e) {
    e.preventDefault();
    var data = {board: {title: this.state.title, description: this.state.description} };
    // this.setState(data);
    //upon creation call success callback in BoardsUtil.
    BoardsUtil.updateBoard(this.state.id, data, function (board_id) {
      this.history.pushState({}, "/boards/" + board_id);
    }.bind(this));

  },

  handleDelete: function(e) {
    e.preventDefault();

    //upon creation call success callback in BoardsUtil.
    BoardsUtil.updateBoard(this.state.id, function (board_id) {
      this.history.pushState({}, "/boards/");
    }.bind(this));

  }

});

module.exports = BoardsEdit;
