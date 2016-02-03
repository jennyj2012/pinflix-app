var React = require('react');
var BoardsStore = require('../../stores/boards_store');
var BoardsUtil = require('../../util/boards_util');

var PinFormBoardItem = React.createClass({

  getInitialState: function () {
    return {allBoards: [] };
  },

  componentDidMount: function () {
    this.boardListener = BoardsStore.addListener(this.__onChange);
    BoardsUtil.fetchAllBoards();
  },

  componentWillUnMount: function () {
    this.boardListener.remove();
  },

  __onChange: function () {
    this.setState({ allBoards: BoardsStore.all() });
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
