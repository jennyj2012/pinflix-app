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
      <input type="text" placeholder="search"/>
        <div className="search-button">
          <i className="fa fa-search"></i>
        </div>
      </div>
    );
  }

});

module.exports = Search;
