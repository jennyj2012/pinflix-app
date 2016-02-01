var React = require('react');
var CurrentUserStore = require('../../stores/current_user_store');

var BoardsForm = React.createClass({

  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

   render: function () {

    return(
      <div>
      <h2>new_board</h2>
      </div>
    );
  }

});

module.exports = BoardsForm;
