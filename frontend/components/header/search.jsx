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
    if(this.isMounted()) {
      this.forceUpdate();
    }
  },

  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 1);

    if(this.isMounted()) {
      this.setState({page: 1, query: query});
    }
  },

  nextPage: function () {
    var nextPage = this.state.page + 1;
    SearchApiUtil.search(this.state.query, nextPage);

    if(this.isMounted()) {
      this.setState({page: nextPage});
    }
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },


   render: function () {

     var totalCount = SearchResultsStore.meta().totalCount || 0;
     var pageCount = SearchResultsStore.all().length
     var nextPageLink = [];

     if (pageCount % totalCount !== 0 && typeof pageCount % totalCount == "number"){
       nextPageLink = <p onClick={this.nextPage}> Next Page </p>;
     }

     var summary = (
       <div>
         <p> Displaying {pageCount} of {totalCount} </p>
         {nextPageLink}
       </div>
     );

     var userResults = [], pinResults = [], boardResults = [], commentResults = [];
     var searchResults = SearchResultsStore.all().forEach(function (searchResult, idx) {
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
