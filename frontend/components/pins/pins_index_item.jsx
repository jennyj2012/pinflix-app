var React = require('react');
var CommentsIndex = require('../comments/comments_index');
var CommentsForm = require('../comments/comments_form');
var History = require('react-router').History;


var PinsIndexItem = React.createClass({
  mixins: [History],

  render: function () {
    var pin = this.props.pin;
    var pinLink= "#/pins/"+ pin.id;
    var pinAuthor = "anonymous";
    var authorLink = "#"
    var comments;
    var imageURL = pin.photo.pin_image;

    if(typeof pin.author !== "undefined"){
      pinAuthor = pin.author.username;
      authorLink = "#/users/" + pin.author.id;
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

    return (
      <div className="index-item pin pin-item">

        <div className="pin-image-link" href={pinLink}>

          <div className="overlay hidden" onClick={this.showPinDetails}/>
          <div className="pin-it-button hidden small-red-button">
            <button onClick={this.pinIt}>Pin It</button>
          </div>

          <img className="pin-image" src={imageURL} />
        </div>

        <div className="pin-summary group">

          <section className="title">
            <figcaption>{pin.title}</figcaption>
          </section>

          <div className="divison"></div>

          <section className="description">
            {pin.description}
          </section>

          <section className="author">
            <a href={authorLink}>
            Author: {pinAuthor}
            </a>
          </section>

          {comments}
        </div>

      </div>
    );
  },

  pinIt: function(e) {
    //send info to pin form to prepopulate.
    e.preventDefault();
    this.history.pushState({}, "/pins/new/" + this.props.pin.id);

  },

  showPinDetails: function(e) {
    this.history.pushState({}, "/pins/" + this.props.pin.id);
  },
});

module.exports = PinsIndexItem;
