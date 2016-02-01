var React = require('react');

var BoardsIndexItem = React.createClass({
  redirect: function (e){

  },

  render: function () {
    var board = this.props.board;
    var boardLink = "#/boards/" + board.id;
    var pin_thumbs = [];

    for(var i = 0; i < 4; i++){
      var thumb;

      if(typeof board.pins[i] === "undefined"){
        thumb= <div></div>;
      } else {
        thumb = <img src={board.pins[i].url}/>;
      }

      pin_thumbs.push(
        <li className="pin-thumb" key={i}>
          {thumb}
        </li>
      );
    }

    return (
      <div className="board-index-item index-item">
        <a href={boardLink}>
          <div className="board-detail-link">
            <section className="title">
              <figcaption>{board.title}</figcaption>
            </section>

            <section>
              <ul className="pin-thumbs group">
                {pin_thumbs}
              </ul>
            </section>
          </div>
        </a>

        <div className="edit-board-button">
          <button>Edit</button>
        </div>
      </div>
    );
  }
});

module.exports = BoardsIndexItem;
