var React = require('react');
var BoardsStore = require('../../stores/boards_store');
var BoardsUtil = require('../../util/boards_util');
var CurrentUserStore = require('../../stores/current_user_store');
var SessionApiUtil = require('../../util/session_util');
var PinFormBoardItem = React.createClass({

  getInitialState: function () {
    return {allBoards: [], currentUser: {} };
  },

  componentDidMount: function () {
    this.boardListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchAllBoards();
  },

  componentWillUnMount: function () {
    this.userListener.remove();
    this.boardListener.remove();
  },

  _userChange: function () {
   this.setState({ currentUser: user });
 },

  __onChange: function () {
    var userId = CurrentUserStore.currentUser().id;
    this.setState({ allBoards: BoardsStore.findByUserId(userId) });
  },

  render: function () {

    var handleSubmit = this.props.handleSubmit;

    var boards = this.state.allBoards.map(function (board) {
      return (
        <li className="pin-board-list-item group" key={board.id}>
          <figcaption>{board.title}</figcaption>
          <div className="pin-to-board-button hidden-button small-red-button" onClick={this.handleSubmit}>
            <button onClick={handleSubmit.bind(null, board.id)}>Pin It</button>
          </div>
        </li>
      );
    });

    return(
      <div className="pin-form-right">
        <h2>Pick a board</h2>
        <ul className="pin-board-list">
          {boards}
        </ul>
      </div>
    );
  }


});

module.exports = PinFormBoardItem;
