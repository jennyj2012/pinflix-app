var Dispatcher = require('../dispatcher/dispatcher');
var BoardsConstants = require('../constants/boards_constants');

var BoardsActions = {
  receiveAllBoards: function(boards){
    Dispatcher.dispatch({
      actionType: BoardsConstants.ALL_BOARDS_RECEIVED,
      boards: boards
    });
  },

  receiveSingleBoard: function(board){
    Dispatcher.dispatch({
      actionType: BoardsConstants.SINGLE_BOARD_RECEIVED,
      board: board
    });
  }

};

module.exports = BoardsActions;
