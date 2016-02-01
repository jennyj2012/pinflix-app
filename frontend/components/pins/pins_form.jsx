var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PinsUtil = require('../../util/pins_util');
var PinsActionForm = require('./pins_action_form');
var History = require('react-router').History;


var PinsForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return { title: "", imageFile: null, imageUrl: "" };
  },

  changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file); // will trigger a load end event when it completes, and invoke reader.onloadend
    } else {
      this.setState({imageFile: null, imageUrl: ""});
    }
  },

  handleSubmit: function(board_id, e) {
    e.preventDefault();

    var formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[image]", this.state.imageFile);
    formData.append("pin[url]", "pinterest.com");
    formData.append("pin[board_id]", board_id);

    PinsUtil.createPin(formData, function (pin_id) {
      this.history.pushState({}, "/pins/detail");
    }.bind(this));

  },

  render: function () {
    return (
      <div className="new-pin">
        <form className="pin-form">
            <h2> Create a Pin </h2>
            <img className="preview-image" src={this.state.imageUrl}/>

            <div className="input">
              <input
                type="text"
                className="pin[title]"
                id="pin_title"
                placeholder="Caption"
                valueLink={this.linkState('title')} />
            </div>

            <div className="input">
              <input
                type="file"
                className="pin[file]"
                id="pin_file"
                onChange={this.changeFile} />
            </div>


            <PinsActionForm preview={this.state.imageUrl} handleSubmit={this.handleSubmit}/>
        </form>
      </div>
    );
  }
});

module.exports = PinsForm;
