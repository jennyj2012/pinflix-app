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
      httpReady: false,
      upload: false,
      imageFile: null,
      imageUrl: "",
      processing: false,
      serverErrors: "",
      loaded: false
    };
  },

  componentDidMount: function (){
    this.pinListener = PinsStore.addListener(this.__onChange);
    if(typeof this.props.params.pin_id !== "undefined"){
      PinsUtil.fetchSinglePin(this.props.params.pin_id);
    } else {
      this.setState({ loaded: true });
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var pinId;
    if(typeof nextProps.params.pin_id !== "undefined"){
      pinId = parseInt(nextProps.params.pin_id);
    }
    if(typeof pinId === "undefined"){
      this.__onChange(-1);
    } else {
      PinsUtil.fetchSinglePin(pinId, this.__onChange);
    }
  },

  componentWillUnMount: function () {
    this.pinListener.remove();
  },

  __onChange: function (id){
    var prevPinId;

    //forced prop change to props/new
    if(id === -1) {
      prevPinId = null;
    } else if(id){
      prevPinId = id;
    } else if(typeof this.props.params.pin_id !== "undefined") {
      prevPinId = parseInt(this.props.params.pin_id);
    }

    var prevPin = PinsStore.find(prevPinId);
    if(typeof prevPin === "undefined" && this.isMounted()){
      this.setState({
        title: "",
        description: "",
        photoId: false,
        pin: { },
        httpUrl: "",
        upload: false,
        imageFile: null,
        imageUrl: "",
        loaded: true
      });
    } else if(this.isMounted()) {
      this.setState({
        photoId: true,
        pin: prevPin,
        title: prevPin.title,
        description: prevPin.description,
        loaded: true
      });
    }
  },

  resetURL: function (e){
    if(this.isMounted()) {
      this.setState({ httpUrl: "", upload: true, httpReady: false });
    }
  },

  loadUrl: function(e){
    e.preventDefault();
    if(this.isMounted() && this.state.httpUrl != "") {
        this.setState({httpReady: true});
    }
  },

  changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function () {
      if(this.isMounted()) {
        this.setState({
          imageFile: file,
          imageUrl: reader.result,
          upload: true
        });
      }
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file); // will trigger a load end event when it completes, and invoke reader.onloadend
    } else if(this.isMounted()) {
      this.setState({upload: false, imageFile: null, imageUrl: ""});
    }
  },

  changeUrl: function(e){
    if(this.isMounted()) {
      this.setState({ httpUrl: e.currentTarget.value, upload: false, imageUrl: "", httpReady: false });
    }
  },

  updateDescription: function(e){
    if(this.isMounted()) {
      this.setState({description: e.currentTarget.value});
    }
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
          <label className="file-upload" >
            <i className="fa fa-camera"></i>
            <p>{this.state.imageUrl}</p>
            <input
              type="file"
              className="pin[file]"
              id="pin_file"
              onChange={this.changeFile}
              />
          </label>
        </div>

        <div className="input pin-url-input">
          <input
            type="text"
            className="pin[http_url]"
            id="pin_http_url"
            value={this.state.httpUrl}
            onChange={this.changeUrl}
            placeholder="URL"
          />
      </div>

          <div className="small-red-button" onClick={this.loadUrl}>
            <button>LoadUrl</button>
          </div>

    </div>
    );

    // ******************************
    // IMAGE PREVIEW SWAP
    // ******************************
    //show prevPin photo only
    if (this.state.photoId) {
      imageDisplay = this.generateImage(pin.photo.image_url);
      inputItems = [];

    //else show url or file buttons - reset views based on input in focus
    } else if (this.state.httpUrl !== "") {
      if(this.state.httpReady) {
        imageDisplay = this.generateImage(this.state.httpUrl);
      }
      else {
        imageDisplay = (<div className="preview-image"></div>);
      }

    } else if (this.state.upload) {
      imageDisplay = this.generateImage(this.state.imageUrl);
    } else {
      imageDisplay = <div className="preview-image"></div>;
    }

    // ******************************
    // RETURN
    // ******************************

    if(!this.state.loaded) {
      return <div><h2>Loading</h2></div>;
    } else {
      return (
          <div className="page">
            <div className="new-pin inner-page">
              <form className="form basic-modal group">

                <div className="pin-form-left">
                  <h2> Create a Pin </h2>
                  {imageDisplay}

                  <div className="input required">
                    <input
                      type="text"
                      className="pin[title]"
                      id="pin_title"
                      placeholder="Add a Movie Title"
                      valueLink={this.linkState('title')} />
                  </div>

                  <textarea
                    className="pin[description]"
                    id="pin_description"
                    placeholder="Add a description"
                    onChange={this.updateDescription}
                    value={this.state.description}></textarea>

                {inputItems}
                <div className="errors">
                  {this.state.serverErrors}
                </div>

                </div>
                  <div>
                    <PinFormBoardItem processing={this.state.processing} handleSubmit={this.handleSubmit}/>
                  </div>
              </form>
            </div>
          </div>
      );
    }
  },

  generateImage: function (src) {
    return <img className="preview-image" src={src} alt="Image Not Found"/>
  },

  handleSubmit: function(board_id, e) {
    e.preventDefault();
    if(this.state.title === "") {
      $(".required").addClass("invalid");
    } else if(this.isMounted()) {
      this.setState({processing: true});
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
      PinsUtil.createPin(
        formData,
        function (data) {
          if(typeof data == "number") {
            this.history.pushState({}, "/pins/" + data);
          } else {
            this.setState({ processing: false, serverErrors: data});
          }
        }.bind(this)
      );
    }
  }

});

module.exports = PinsForm;
