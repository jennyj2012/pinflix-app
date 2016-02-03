var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');
var PinFormBoardItem = require('./pins_form_board_item');

var PinsForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return {
      title: "",
      description: "",
      photoId: false,
      pin: { },
      httpUrl: "",
      imageFile: null,
      imageUrl: "" };
  },

  componentDidMount: function (){
    this.pin = _pinId();
    if(typeof this.pin !== "undefined"){
      PinsUtil.fetchSinglePins(this.pin);
      var prevPin = PinsStore.find(this.pin);
      this.setState({
        photoId: true,
        pin: prevPin,
        title: prevPin.title,
        description: prevPin.description });
    }
  },

  changeFile: function(e) {
    this.setState({httpUrl: ""});

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

  changeUrl: function(e){
    this.setState({imageFile: null, imageUrl: "", httpUrl: e.currentTarget.value });
  },

  updateDescription: function(e){
    this.setState({description: e.currentTarget.value});
  },

  _pinId: function () {
    var pinId;
    debugger
    if(this.location.query !== "" || this.location.query !== "undefined"){
      pinId = parseInt(this.props.location.query);
    } else {
      pinId = undefined;
    }
    return pinId;
  },

  render: function () {
    var imageDisplay;
    var pin = this.state.pin;

    //show prevPin photo only
    if (this.state.photoId) {
      imageDisplay = (
        <img className="preview-image" src={pin.photo.image_url}/>
      );
    }
    //else show url or file buttons - reset views based on input in focus
    else {
      if (this.state.imageUrl !== "") {
        imageDisplay = (
          <img className="preview-image" src={this.state.imageUrl}/>
        );
      } else if (this.state.httpUrl !== "") {
        imageDisplay = (
          <img className="preview-image" src={this.state.httpUrl}/>
        );
      } else {
        imageDisplay = (
          <div className="preview-image"></div>
        );
      }
    }

    return (
      <div className="new-pin">
        <form className="pin-form group">

          <div className="pin-form-left">
            <h2> Create a Pin </h2>
            {imageDisplay}

            <div className="input">
              <input
                type="text"
                className="pin[title]"
                id="pin_title"
                placeholder="Movie Title or Caption"
                valueLink={this.linkState('title')} />
            </div>

            <textarea
              className="pin[description]"
              id="pin_description"
              placeholder="Add a description"
              onChange={this.updateDescription}
              value={this.state.description}></textarea>


            <div className="input pin-file-input">
            <input
              type="file"
              className="pin[file]"
              id="pin_file"
              onChange={this.changeFile} />
            </div>

          <div className="input pin-url-input">
            <label>URL: </label>
            <input
              type="text"
              className="pin[http_url]"
              id="pin_http_url"
              value={this.state.httpUrl}
              onChange={this.changeUrl} />
          </div>

          </div>
            <div>
              <PinFormBoardItem handleSubmit={this.handleSubmit}/>
            </div>
        </form>
      </div>
    );
  },

  handleSubmit: function(board_id, e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[board_id]", board_id);

    formData.append("pin[upload]", this.state.imageFile);
    formData.append("pin[httpUrl]", this.state.httpUrl);
    formData.append("pin[prevPin]", this.pin.photo);


    //upon creation call success callback in PinsUtil.
    PinsUtil.createPin(formData, function (pin_id) {
      this.history.pushState({}, "/pins/" + pin_id);
    }.bind(this));

  }

});

module.exports = PinsForm;
