var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CommentsForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {text: "Add a comment..."};
  },
  handleChange: function(e){
    debugger
    this.setState({text: e.currentTarget.value});
  },
  render: function () {
    var comment = this.props.comment;
    return (
      <div>
          <section className="comment">
              <a href="#">
              current user
            </a>
            <form className="comment-form">
              <textarea className="comment[body]" id="comment_body" handleChange={this.handleChange}>{this.state.text}</textarea>

            <div className="comment-button basic-red-button">
              <button>Comment</button>
            </div>
            </form>
          </section>
      </div>
    );
  }
});

module.exports = CommentsForm;
