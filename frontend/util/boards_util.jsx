var BoardsActions = require('../actions/boards_actions');

var BoardsUtil = {
  fetchAllBoards: function (){
    $.get({
      url: "/api/boards",
      dataType: "json",
      success: function (boards) {
        BoardsActions.receiveAllBoards(boards);
      },
      error: function (xhr, textStatus, errorThrown){
        console.log(errorThrown);
      }
    });
  },

  fetchSingleBoard: function (id, callback){
    $.get({
      url: "/api/boards/" + id,
      dataType: "json",
      success: function (board) {
        BoardsActions.receiveSingleBoard(board);
        if(callback){ callback(board.id); }
      }
    });
  },

  createBoard: function (data, callback){
    $.post({
      url: "/api/boards/",
      dataType: "json",
      data: data,
      success: function (data) {
        BoardsActions.receiveSingleBoard(data);
        if(callback) { callback(data.id); }
      }
    });
  },

  updateBoard: function (id, data, callback){
    $.ajax({
      url: "/api/boards/" + id,
      dataType: "json",
      type: 'PATCH',
      data: data,
      success: function (board) {
        BoardsActions.receiveSingleBoard(board);
        if(callback) { callback(board.id); }
      }
    });
  },

  deleteBoard: function (id, callback){
    $.ajax({
      url: "/api/boards/" + id,
      dataType: "json",
      type: 'DELETE',
      success: function (board) {
        BoardsActions.removeSingleBoard(board);
        if(callback) { callback(board.id); }
      }
    });
  },

};

module.exports = BoardsUtil;
