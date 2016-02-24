var React = require('react');
var BoardsStore = require('../../stores/boards_store');
var BoardsUtil = require('../../util/boards_util');
var CurrentUserStore = require('../../stores/current_user_store');
var SessionApiUtil = require('../../util/session_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var PinFormBoardItem = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {allBoards: [], currentUser: {}, board_title: "", loaded: false };
  },

  componentDidMount: function () {
    SessionApiUtil.fetchCurrentUser();

    this.boardListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchAllBoards();
  },

  componentWillUnMount: function () {
    this.boardListener.remove();
  },

  __onChange: function () {
    var userId = CurrentUserStore.currentUser().id;
    if(this.isMounted()) {
      this.setState({ allBoards: BoardsStore.findByUserId(userId), loaded: true });
    }
  },

  render: function () {
    var handleSubmit = this.props.handleSubmit;

    var boards = this.state.allBoards.map(function (board) {
      var thumb;
      if(board.pins.length === 0){
        thumb = <img className="mini-thumb" src={window.pinflix.logo}/>
      } else {
        thumb = <img className="mini-thumb" src={board.pins[0].photo.image_url}/>;
      }
      return (
        <li className="pin-board-list-item group" key={board.id}>
          {thumb}
          <figcaption className=".title">{board.title}</figcaption>
          <div className="pin-to-board-button hidden small-red-button">
            <button onClick={handleSubmit.bind(null, board.id)}>Pin It</button>
          </div>
        </li>
      );
    });

    var content;
    if(!this.state.loaded) {
      content = <h2>Loading</h2>;
    }
    else if(this.props.processing) {
       content = <h2>Please Wait</h2>;
    } else {
      content = (
        <div className="pin-form-right">
          <h2>Pick a board</h2>
          <p>Hover over a board</p>
          <ul className="pin-board-list">
            {boards}
            <li className="pin-board-list-item create-board-item group required">
                <input
                  type="text"
                  className="board[title] pin-create-board-input"
                  id="board_title"
                  placeholder="Create Board"
                  valueLink={this.linkState('board_title')} />

                <div className="pin-to-board-button hidden small-red-button">
                  <button onClick={this.handleNewBoard}>Create Board</button>
                </div>
            </li>
          </ul>
        </div>
      );
    }

    return content;

  },

  handleNewBoard: function (e){
    e.preventDefault()
    e.preventDefault();
    if(this.state.board_title === ""){
      $(".required").addClass("invalid");
    } else {
      BoardsUtil.createBoard(
        {board: {title: this.state.board_title}},
        function(){
          $("create-board-item").removeClass("invalid");
          this.setState({board_title: ""});
        }.bind(this)
      );
    }


  }


});

module.exports = PinFormBoardItem;
