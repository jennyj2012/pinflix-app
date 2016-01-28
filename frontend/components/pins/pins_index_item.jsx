var React = require('react');

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
        <img src={pin.url} />

        <div className="pin-summary group">
          <section>
            <p>from:
            <a href={pin.url}> {hostname}</a>
           </p>
          </section>

          <section className="title">
            <figcaption>{pin.title}</figcaption>
          </section>

          <div className="divison"></div>

        <section>
            {pin.description}
          </section>

          <section>
            author: {pin.author.username}
          </section>
        </div>

      </div>
    );
  }
});

module.exports = PinsIndexItem;
