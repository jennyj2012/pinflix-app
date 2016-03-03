var React = require('react');
var History = require('react-router').History;
var CurrentUserStore = require('../../stores/current_user_store');

var BoardsIndexItem = React.createClass({
  mixins: [History],

  render: function () {
    var board = this.props.board;
    var pinThumbs = [];
    var editButton = [];
    var isCurrent = this.props.isCurrent;

    for(var i = 0; i < 4; i++){
      var thumb;

      if(typeof board.pins[i] === "undefined"){
        thumb= <div></div>;
      } else if (i === 0) {
        thumb = <img src={board.pins[i].photo.board_image}/>;
      } else {
        thumb = <img src={board.pins[i].photo.thumb}/>;
      }

      pinThumbs.push(
        <li className="pin-thumb" key={i}>
          {thumb}
        </li>
      );
    }

    if(isCurrent){
      editButton = (
        <div className="edit-board-button">
            <a href={"#/boards/edit/" + this.props.board.id}>Edit</a>
        </div>
      );
    }

    return (
        <div className="board-index-item index-item" >
            <div className="board-detail-link" onClick={this.handleClick}>
              <section className="title">
                <figcaption>{board.title}</figcaption>
              </section>

              <section>
                <ul className="pin-thumbs group">
                  {pinThumbs}
                </ul>
              </section>
            </div>

            {editButton}
        </div>
      );

  },

  handleClick: function (e) {
    e.preventDefault();
    this.history.pushState({}, "/boards/"+ this.props.board.id);
  }

});

module.exports = BoardsIndexItem;
