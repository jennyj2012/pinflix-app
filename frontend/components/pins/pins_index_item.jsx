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
    var hostname = this.get_domain_from_url(pin.url);

    return (
      <div className="index-item">
        <img className="pin-image" src={pin.url} />

        <div className="pin-summary group">
          <section >
            <p>from:
            <a href={pin.url}> {hostname}</a>
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

          <CommentsIndex comments={pin.comments} pin={pin}/>
          <CommentsForm pin={pin}/>
        </div>

      </div>
    );
  }
});

module.exports = PinsIndexItem;
