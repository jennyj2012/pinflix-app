var React = require('react');
var CommentsIndex = require('../comments/comments_index');
var CommentsForm = require('../comments/comments_form');

var PinsIndexItem = React.createClass({
  get_domain_from_url: function (url){
    var a = document.createElement('a');
    a.setAttribute('href', url);
    return a.hostname;
  },
  render: function () {
    var pin = this.props.pin;
    var comments;
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
    var image_url;

    //if file uploaded
    if(pin.url === "pinterest.com"){
      image_url = pin.image_url;
      hostname = pin.author.username;
    }
    //if url uploaded
    else {
      image_url = pin.url;
      hostname = this.get_domain_from_url(pin.url);
    }

    return (
      <div className="index-item">
        <img className="pin-image" src={image_url} />

        <div className="pin-summary group">
          <section >
            <p>from:
            <a href={image_url}> {hostname}</a>
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
            Author: {pin.author.username}
            </a>
          </section>

          {comments}
        </div>

      </div>
    );
  }
});

module.exports = PinsIndexItem;
