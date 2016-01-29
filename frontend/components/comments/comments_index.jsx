var React = require('react');
var CommentsIndexItem = require('./comments_index_item');

var CommentsIndex = React.createClass({

  render: function () {
    var comments = this.props.comments.map(function (comment) {
      return <CommentsIndexItem key={comment.id} comment={comment}></CommentsIndexItem>;
    });

    return (
      <div>
        <div className="divison"></div>
        {comments}
      </div>
    );
  }
});

module.exports = CommentsIndex;
