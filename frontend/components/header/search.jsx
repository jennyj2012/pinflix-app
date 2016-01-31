var React = require('react');

var Search = React.createClass({

  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

   render: function () {

    return(
      <div className="search">
      <h2>searchbar</h2>
      </div>
    );
  }

});

module.exports = Search;
