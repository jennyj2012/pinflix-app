var React = require('react');
var CurrentUserStore = require('./../stores/current_user_store');

var InfoBox = React.createClass({

  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

   render: function () {

    return(
      <div>
      <h2>searchbar</h2>
      </div>
    );
  }

});

module.exports = InfoBox;
