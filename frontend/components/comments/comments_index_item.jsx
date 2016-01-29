var React = require('react');


var CommentsIndexItem = React.createClass({

  render: function () {
    var comment = this.props.comment;

    var comment_author;
    if (comment.author){
      comment_author = comment.author.username;
    }else {
      comment_author = "anonymous";
    }

    return (
      <div>
          <section className="comment">
            <a href="#">
            Commenter: {comment_author}
            </a>
            <p>{comment.body}</p>
          </section>
      </div>
    );
  }
});

module.exports = CommentsIndexItem;
