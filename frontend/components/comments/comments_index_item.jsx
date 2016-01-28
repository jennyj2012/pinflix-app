var React = require('react');


var CommentsIndexItem = React.createClass({

  render: function () {
    var comment = this.props.comment;
    return (
      <div>
          <section className="comment">
            <a href="#">
            Commenter: {comment.author.username}
            </a>
            <p>{comment.body}</p>
          </section>
      </div>
    );
  }
});

module.exports = CommentsIndexItem;
