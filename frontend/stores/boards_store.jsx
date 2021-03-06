var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var BoardsConstants = require('../constants/boards_constants');

var BoardsStore = new Store(Dispatcher);

var _boards = [];

var resetBoards = function(boards){
  _boards = boards;
};

var addBoard = function(board){
  _boards.push(board);
};

var updateBoard = function(board){
  var idx;
  for(var i = 0; i < _boards.length; i++){
    if(_boards[i].id === board.id){
      idx = i;
    }
  }
  if(typeof idx === "undefined"){
    addBoard(board);
  } else {
    _boards[idx] = board;
  }
};

var removeBoard = function(board){
  var idx;
  for(var i = 0; i < _boards.length; i++){
    if(_boards[i].id === board.id){
      idx = i;
    }
  }
  if(typeof idx === "undefined"){
    _boards.splice(idx, 1);
  }
};

BoardsStore.all = function () {
  return _boards.slice();
};

BoardsStore.find = function (id) {
  var idx;
  for(var i = 0; i < _boards.length; i++){
    if(_boards[i].id === id){
      idx = i;
    }
  }
  return _boards[idx];
};

BoardsStore.findByUserId = function (id) {
  var boards = _boards.filter(function (board) {
    return board.author_id === id;
  });
  return boards;
};

BoardsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BoardsConstants.ALL_BOARDS_RECEIVED:
      resetBoards(payload.boards);
      BoardsStore.__emitChange();
      break;
    case BoardsConstants.SINGLE_BOARD_RECEIVED:
      updateBoard(payload.board);
      BoardsStore.__emitChange();
      break;
    case BoardsConstants.SINGLE_BOARD_REMOVED:
      removeBoard(payload.board);
      BoardsStore.__emitChange();
      break;
    default:
      break;
  }
};

module.exports = BoardsStore;
