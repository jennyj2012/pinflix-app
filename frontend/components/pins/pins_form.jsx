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
      upload: false,
      imageFile: null,
      imageUrl: ""
    };
  },

  componentDidMount: function (){
    if(typeof this.props.params.pin_id !== "undefined"){
      this.pinListener = PinsStore.addListener(this.__onChange);
      PinsUtil.fetchSinglePin(this.props.params.pin_id);
    }
  },
  //
  // componentWillReceiveProps: function(nextProps) {
  //   // debugger
  //   // this.setState({ });
  // },

  componentWillUnMount: function (){
    if(typeof this.props.params.pin_id !== "undefined"){
      this.pinListener.remove();
    }
  },

  __onChange: function (){
    var prevPinId = parseInt(this.props.params.pin_id);
    if(typeof prevPinId !== "undefined"){
      var prevPin = PinsStore.find(prevPinId);

      this.setState({
        photoId: true,
        pin: prevPin,
        title: prevPin.title,
        description: prevPin.description
      });
    }
  },
  resetURL: function (e){
    this.setState({httpUrl: "", upload: true});
  },

  changeFile: function(e) {
    this.event = e;
    var reader = new FileReader();
    file = e.currentTarget.files[0];
    reader.onloadend = function () {
      this.setState({
        imageFile: file,
        imageUrl: reader.result,
        upload: true
      });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file); // will trigger a load end event when it completes, and invoke reader.onloadend

    } else {
      this.setState({upload: false, imageFile: null, imageUrl: ""});
    }
  },

  changeUrl: function(e){
    this.setState({ httpUrl: e.currentTarget.value, upload: false });
  },

  updateDescription: function(e){
    this.setState({description: e.currentTarget.value});
  },

  render: function () {
    var imageDisplay;
    var pin = this.state.pin;
    var filename;

    // ******************************
    // INPUT ITEMS
    // ******************************

    var inputItems = (
      <div>
        <div className="input pin-file-input" onClick={this.resetURL} >

        <input
          type="file"
          className="pin[file]"
          id="pin_file"
          onChange={this.changeFile}
          />
        </div>


      <div className="input pin-url-input" >
        <input
          type="text"
          className="pin[http_url]"
          id="pin_http_url"
          value={this.state.httpUrl}
          onChange={this.changeUrl}
          placeholder="URL" />
      </div>
    </div>
    );

    // ******************************
    // IMAGE PREVIEW SWAP
    // ******************************

    //show prevPin photo only
    if (this.state.photoId) {
      imageDisplay = (
        <img className="preview-image" src={pin.photo.image_url}/>
      );
      inputItems = [];
    }
    //else show url or file buttons - reset views based on input in focus
    else {
      if (this.state.httpUrl !== "") {
      imageDisplay = (
        <img className="preview-image" src={this.state.httpUrl}/>
      );
    } else if (this.state.upload) {
        imageDisplay = (
          <img className="preview-image" src={this.state.imageUrl}/>
        );
      } else {
        imageDisplay = (
          <div className="preview-image"></div>
        );
      }
    }

    // ******************************
    // RETURN
    // ******************************

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

          {inputItems}

          </div>
            <div>
              <PinFormBoardItem handleSubmit={this.handleSubmit}/>
            </div>
        </form>
      </div>
    );
  },

  handleSubmit: function(board_id, e) {
    // debugger
    e.preventDefault();
    var formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[board_id]", board_id);

    if(this.state.upload) {
      formData.append("pin[imageFile]", this.state.imageFile);
    }

    if(this.state.httpUrl !== "") {
      formData.append("pin[http_url]", this.state.httpUrl);
    }

    if(typeof this.state.pin.id !== "undefined") {
      formData.append("pin[prev_photo_id]", this.state.pin.photo.id);
    }
    //upon creation call success callback in PinsUtil.
    PinsUtil.createPin(formData, function (pin_id) {
      this.history.pushState({}, "/pins/" + pin_id);
    }.bind(this));

  }

});

module.exports = PinsForm;
