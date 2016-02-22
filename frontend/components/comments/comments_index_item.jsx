var React = require('react');


var CommentsIndexItem = React.createClass({

  render: function () {
    var comment = this.props.comment;
    var authorLink = "#"

    var commentAuthor;
    if (comment.author){
      commentAuthor = comment.author.username;
      authorLink = "#/users/" + comment.author.id;
    }else {
      commentAuthor = "anonymous";
    }

    return (
      <div>
          <section className="comment">
            <a href={authorLink}>
            Commenter: {commentAuthor}
            </a>
            <p>{comment.body}</p>
          </section>
      </div>
    );
  }
});

module.exports = CommentsIndexItem;
