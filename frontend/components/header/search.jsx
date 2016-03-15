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

  componentWillUnmount: function () {
    this.listener.remove();
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
   var searchHash = { User: [], Pin: [], Board: [], Comment: [] };
   var filteredSearch = [];


   if (pageCount % totalCount !== 0 && typeof pageCount % totalCount == "number"){
     nextPageLink = <p onClick={this.nextPage}> Next Page </p>;
   }

   var summary = (
     <div>
       <p> Displaying {pageCount} of {totalCount} </p>
       {nextPageLink}
     </div>
   );

   var searchResults = SearchResultsStore.all().forEach(function (searchResult, idx) {
     if (searchResult._type === "User" && typeof searchResult.id !== "undefined") {
        searchHash['User'].push(
          <li key={idx}>
            <a href={"#/users/" + searchResult.id}>
            Pinner: {searchResult.username}
            </a>
          </li>);
     } else if (searchResult._type === "Pin" && typeof searchResult.id !== "undefined"){
        searchHash['Pin'].push(
          <li key={idx}>
            <a href={"#/pins/" + searchResult.id}>
              Pin: {searchResult.title}
            </a>
          </li>);
     } else if (searchResult._type === "Board" && typeof searchResult.id !== "undefined"){
        searchHash['Board'].push(
          <li key={idx}>
            <a href={"#/boards/" + searchResult.id}>
              Board: {searchResult.title}
            </a>
          </li>);
     } else if (searchResult._type === "Comment" && typeof searchResult.pin_id !== "undefined"){
        searchHash['Comment'].push(
          <li key={idx}>
            <a href={"#/pins/" + searchResult.pin_id}>
              Comment: {searchResult.body}
            </a>
          </li>);
     }
   });

   filteredSearch = Object.keys(searchHash).map( function (searchKey) {
     if(searchHash[searchKey].length > 0){
       return <ul key={searchKey} >{searchKey.toString()} Results: {searchHash[searchKey]}</ul>
     }
   }.bind(this));

  return(
        <div className = "search-bar">
          <input type="text" placeholder="search" onKeyUp={ this.search }/>
          <div className="search-results hidden">
          {filteredSearch}
          {summary}
          </div>

        </div>

    );
  }


});

module.exports = Search;
