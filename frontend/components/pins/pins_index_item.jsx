var React = require('react');
var CommentsIndex = require('../comments/comments_index');
var CommentsForm = require('../comments/comments_form');
var History = require('react-router').History;


var PinsIndexItem = React.createClass({
  mixins: [History],

  get_domain_from_url: function (url){
    var a = document.createElement('a');
    a.setAttribute('href', url);
    return a.hostname;
  },

  pinIt: function(e) {
    //send info to pin form to prepopulate.
    debugger
    e.preventDefault();
    // var formData = new FormData();
    // formData.append("pin[title]", this.state.title);
    // formData.append("pin[image]", this.state.imageFile);
    // formData.append("pin[url]", "pinterest.com");
    // formData.append("pin[board_id]", board_id);
    //
    // PinsUtil.createPin(formData, function (pin_id) {
    //   this.history.pushState({}, "/boards");
    // }.bind(this));

  },
  showPinDetails: function(e) {
    this.history.pushState({}, "/pins/" + this.props.pin.id);
  },

  render: function () {
    var pin = this.props.pin;
    var pinLink= "#/pins/"+ pin.id;
    var comments;
    var pinAuthor = "anonymous";

    if(typeof pin.author !== "undefined"){
      pinAuthor = pin.author.username;
    }


    if(this.props.showComments === true){
      comments = (
        <div>
          <CommentsIndex comments={pin.comments} pin={pin}/>
          <CommentsForm pin={pin}/>
        </div>
      );
    } else {
      comments = [];
    }

    var hostname;
    var imageURL;

    //if file uploaded
    if(pin.url === "pinterest.com"){
      imageURL = pin.image_url;
      hostname = pinAuthor;
    }
    //if url uploaded
    else {
      imageURL = pin.url;
      hostname = this.get_domain_from_url(pin.url);
    }

    return (
      <div className="index-item pin-item">

        <div className="pin-image-link" href={pinLink}>

          <div className="overlay hidden" onClick={this.showPinDetails}/>
          <div className="pin-it-button hidden small-red-button">
            <button onClick={this.pinIt}>Pin It</button>
          </div>

          <img className="pin-image" src={imageURL} />
        </div>

        <div className="pin-summary group">
          <section >
            <p>from:
            <a href={imageURL}> {hostname}</a>
           </p>
          </section>

          <section className="title">
            <figcaption>{pin.title}</figcaption>
          </section>

          <div className="divison"></div>

          <section className="description">
            {pin.description}
          </section>

          <section className="author">
            <a href="#">
            Author: {pinAuthor}
            </a>
          </section>

          {comments}
        </div>

      </div>
    );
  }
});

module.exports = PinsIndexItem;
