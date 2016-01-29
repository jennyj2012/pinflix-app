var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');

var CommentsForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {body: ""};
  },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    PinsUtil.createPinComment(this.state.body, this.props.pin.id);
    this.setState({body: ""});
  },

  render: function () {
    var comment = this.props.comment;

    return (
      <div>
          <section className="comment">
              <a href="#">
              current user
            </a>
            <form onSubmit={this.handleSubmit} className="comment-form">
              <textarea className="comment[body]" id="comment_body" placeholder="Add a comment..." onChange={this.updateBody} value={this.state.body}>
              </textarea>

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
