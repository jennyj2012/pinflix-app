var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchResultsStore = require('../../stores/search_results_store');
var SearchApiUtil = require('../../util/search_util');

var Search = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { page: 1, query: ""};
  },

  componentDidMount: function() {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },

  _onChange: function() {
    this.forceUpdate();
  },

  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 1);

    this.setState({page: 1, query: query});
  },

  nextPage: function () {
      var nextPage = this.state.page + 1;
      SearchApiUtil.search(this.state.query, nextPage);

      this.setState({page: nextPage});
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },


   render: function () {

     var totalCount = SearchResultsStore.meta().totalCount || 0;

     var summary = (
       <p> Displaying {SearchResultsStore.all().length} of {totalCount}</p>
     );

     debugger
     var userResults = [], pinResults = [], boardResults = [], commentResults = [], tagResults;
     var searchResults = SearchResultsStore.all().forEach(function (searchResult, idx) {
       debugger
       if (searchResult._type === "User" && typeof searchResult.id !== "undefined") {
          userResults.push(
            <li key={idx}>
              <a href={"#/users/" + searchResult.id}>
              Pinner: {searchResult.username}
              </a>
            </li>);
       } else if (searchResult._type === "Pin" && typeof searchResult.id !== "undefined"){
          pinResults.push(
            <li key={idx}>
              <a href={"#/pins/" + searchResult.id}>
                Pin: {searchResult.title}
              </a>
            </li>);
       } else if (searchResult._type === "Board" && typeof searchResult.id !== "undefined"){
          boardResults.push(
            <li key={idx}>
              <a href={"#/boards/" + searchResult.id}>
                Board: {searchResult.title}
              </a>
            </li>);
       } else if (searchResult._type === "Comment" && typeof searchResult.pin_id !== "undefined"){
          commentResults.push(
            <li key={idx}>
              <a href={"#/pins/" + searchResult.pin_id}>
                Comment: {searchResult.body}
              </a>
            </li>);
       }
     });
    return(

          <div className = "search-bar">
            <input type="text" placeholder="search" onKeyUp={ this.search }/>
            <div className="search-results hidden">
              {summary}
              <ul>Tag Results {tagResults}</ul>
              <ul>Pinner Results {userResults}</ul>
              <ul>Board Results {boardResults}</ul>
              <ul>Pin Results {pinResults}</ul>
              <ul>Comment Results {commentResults}</ul>
            </div>

          </div>

    );
  }

});

module.exports = Search;
