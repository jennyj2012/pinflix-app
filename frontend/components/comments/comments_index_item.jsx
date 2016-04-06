var React = require('react');
var PinsUtil = require('../../util/pins_util');
var CurrentUserStore = require('../../stores/current_user_store');

var CommentsIndexItem = React.createClass({

  render: function () {
    var comment = this.props.comment;
    var authorLink = "#";
    var deleteButton = [];
    var currentUser = CurrentUserStore.currentUser();

    var commentAuthor;
    if (comment.author){
      commentAuthor = comment.author.username;
      authorLink = "#/users/" + comment.author.id;
    }else {
      commentAuthor = "anonymous";
    }

    if(comment.author.id === currentUser.id) {
      deleteButton = (
        <div className="right basic-red-button" onClick={this.handleDelete.bind(this, comment.id)}>
          <button>Delete</button>
        </div>
      );
    }

    return (
      <div>
          <section className="comment">
            <a href={authorLink}>
              Commenter: {commentAuthor}
            </a>
            <div className="comment-show group">
              <p className="left">{comment.body}</p>
              {deleteButton}
            </div>
          </section>
      </div>
    );
  },

  handleDelete: function(commentId, e){
    e.preventDefault(e);
    PinsUtil.deletePinComment(commentId);
  }
});

module.exports = CommentsIndexItem;
