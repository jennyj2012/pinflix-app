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
    if(this.isMounted()) {
      this.setState({currentUser: CurrentUserStore.currentUser()});
    }
 },

  updateBody: function(e){
    if(this.isMounted()) {
      this.setState({body: e.currentTarget.value});
    }
  },

  render: function () {
    var comment = this.props.comment;

    return (
      <div>
          <section className="comment">
              <a href="#">
                {this.state.currentUser.username}
              </a>
            <form className="comment-form requried" onSubmit={this.handleSubmit}>
              <textarea
                className="comment[body]"
                id="comment_body"
                placeholder="Add a comment..."
                onChange={this.updateBody}
                value={this.state.body}></textarea>

              <div className="comment-button basic-red-button group">
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
      if(this.isMounted()) {
        this.setState({body:  ""});
      }
    }
  }
});

module.exports = CommentsForm;
