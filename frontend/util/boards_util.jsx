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

  fetchSingleBoard: function (id){
    debugger
    $.get({
      url: "/api/boards/" + id,
      dataType: "json",
      success: function (board) {
        BoardsActions.receiveSingleBoard(board);
      }
    });
  },

};

module.exports = BoardsUtil;
