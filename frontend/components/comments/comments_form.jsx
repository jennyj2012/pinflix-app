var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CurrentUserStore = require('../../stores/current_user_store');

var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');

var CommentsForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {body: "", currentUser: {}};
  },

  componentDidMount: function () {
    this.userListener = CurrentUserStore.addListener(this._onChange);
  },

  componentWillUnMount: function () {
    this.userListener.remove();
  },

  _onChange: function () {
   this.setState({currentUser: CurrentUserStore.currentUser()});
 },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value});
  },

  keydown: function(e){
    debugger
    if(e.target.value == 13)
    this.setState({body: e.currentTarget.value});
  },

  render: function () {
    var comment = this.props.comment;

    return (
      <div>
          <section className="comment">
              <a href="#">
                {this.state.currentUser.username}
              </a>
            <form className="comment-form requried" onSubmit={this.handleSubmit} onKeyDown={this.keydown}>
              <textarea
                className="comment[body]"
                id="comment_body"
                placeholder="Add a comment..."
                onChange={this.updateBody}
                value={this.state.body}></textarea>

            <div className="comment-button basic-red-button">
              <button>Comment</button>
            </div>
            </form>
          </section>
      </div>
    );
  },

  handleSubmit: function(e){
    e.preventDefault();

    if(this.state.body === ""){
      $(".required").addClass("invalid");
    } else {
      PinsUtil.createPinComment({
        body: this.state.body,
        pin_id: this.props.pin.id
      });
      this.setState({body:  ""});
    }
  }
});

module.exports = CommentsForm;
