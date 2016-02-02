var React = require('react');


var CommentsIndexItem = React.createClass({

  render: function () {
    var comment = this.props.comment;

    var commentAuthor;
    if (comment.author){
      commentAuthor = comment.author.username;
    }else {
      commentAuthor = "anonymous";
    }

    return (
      <div>
          <section className="comment">
            <a href="#">
            Commenter: {commentAuthor}
            </a>
            <p>{comment.body}</p>
          </section>
      </div>
    );
  }
});

module.exports = CommentsIndexItem;
