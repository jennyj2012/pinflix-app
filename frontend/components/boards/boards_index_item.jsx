var React = require('react');
var PinsIndex = require('../pins/pins_index');

var BoardsIndexItem = React.createClass({

  render: function () {
    var board = this.props.board;
    // var pin_thumbs = board.pins.map(function (pin){
    //   return <img src={pin.url}/>;
    // }).slice(0,4);
debugger
    return (
      <div className="board-index index-item">
        <section className="title">
          <figcaption>{board.title}</figcaption>
        </section>

          <section className="description">
            {board.description}
          </section>
      </div>
    );
  }
});

module.exports = BoardsIndexItem;
