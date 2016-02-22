var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var BoardsUtil = require('../../util/boards_util');
var BoardsStore = require('../../stores/boards_store');

var BoardsForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      title: "",
      description: "",
    };
  },

  updateDescription: function(e){
    if(this.isMounted()) {
      this.setState({description: e.currentTarget.value});
    }
  },

   render: function () {

    return(
      <div>
        <h2>New Board</h2>
        <form className="form basic-modal group">
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

          <div className="small-red-button">
            <button onClick={this.handleSubmit}>Create Board</button>
          </div>
        </form>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if(this.state.title === ""){
      $(".required").addClass("invalid");
    } else {
      var data = {board: {title: this.state.title, description: this.state.description} };
      //upon creation call success callback in BoardsUtil.
      BoardsUtil.createBoard(data, function (board_id) {
        this.history.pushState({}, "/boards/" + board_id);
      }.bind(this));
    }

  }

});

module.exports = BoardsForm;
