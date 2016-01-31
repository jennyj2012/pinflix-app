var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Search = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { searchBar: {} };
  },

   render: function () {

    return(
      <div className="search group">
      <h2>searchbar</h2>
      <input type="text"/>
      </div>
    );
  }

});

module.exports = Search;
