var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PinsUtil = require('../../util/pins_util');
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

  handleSubmit: function(e) {
    e.preventDefault();

    var formData = new FormData();

    formData.append("pin[title]", this.state.title);
    formData.append("pin[image]", this.state.imageFile);
    formData.append("pin[board_id]", 1);
    formData.append("pin[url]", "temp-url");

    PinsUtil.createPin(formData, function () {
      this.history.pushState({}, "/boards");
    }.bind(this));
  },

  render: function () {
    return (
      <div className="new-pin">
        <form className="pin-form" onSubmit={this.handleSubmit}>

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

            <div className="basic-red-button">
              <button>Next</button>
            </div>

        </form>
      </div>
    );
  }
});

module.exports = PinsForm;
