var React = require('react');
var History = require('react-router').History;


var BoardsIndexItem = React.createClass({
  mixins: [History],

  handleClick: function (e) {
    e.preventDefault();
    this.history.pushState({}, "/boards/"+ this.props.board.id);
  },


  render: function () {
    var board = this.props.board;
    var pinThumbs = [];

    for(var i = 0; i < 4; i++){
      var thumb;

      if(typeof board.pins[i] === "undefined"){
        thumb= <div></div>;
      } else {
        thumb = <img src={board.pins[i].url}/>;
      }

      pinThumbs.push(
        <li className="pin-thumb" key={i}>
          {thumb}
        </li>
      );
    }

    return (
      <div className="board-index-item index-item" onClick={this.handleClick}>
          <div className="board-detail-link">
            <section className="title">
              <figcaption>{board.title}</figcaption>
            </section>

            <section>
              <ul className="pin-thumbs group">
                {pinThumbs}
              </ul>
            </section>
          </div>

        <div className="edit-board-button">
        </div>
      </div>
    );
  }
});

module.exports = BoardsIndexItem;
