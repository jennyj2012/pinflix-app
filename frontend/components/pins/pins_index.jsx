var React = require('react');
var PinsUtil = require('../../util/pins_util');
var PinsStore = require('../../stores/pins_store');
var PinsIndexItem = require('./pins_index_item');

var CurrentUserStore = require("../../stores/current_user_store");

var Masonry = require('react-masonry-component');
var masonryOptions = {
  transitionDuration: '0.2s',
  isFitWidth: true,
  itemSelector: '.index-item',
  columnWidth: '.index-item',
  isResizable: true,
  isAnimated: true,
};

var ReactDOM = require('react-dom');


var PinsIndex = React.createClass({
  getInitialState: function (){
    return {allPins: [], page: 1, loaded: false, scrollPos: 0};
  },

  componentDidMount: function (){
    this.pinListener = PinsStore.addListener(this.__onChange);
    PinsUtil.fetchAllPins(this.state.page);
    PinsUtil.fetchTotal();
    document.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnMount: function (){
    this.pinListener.remove();
    document.removeEventListener('scroll', this.handleScroll);
  },

  __onChange: function () {
    var pins = PinsStore.all();

    if(this.isMounted()) {
      this.setState({ allPins: pins, loaded: true });
    }
  },

  handleScroll: function (e) {
    e.preventDefault();
    var scrollPos = $(window).scrollTop() + $(window).height();

    if (this.state.scrollPos < scrollPos && scrollPos >= $(document).height()) {
      this.nextPage();
    }

    if (this.state.scrollPos < scrollPos && this.isMounted()) {
      this.setState({scrollPos: scrollPos});
    }
  },

  nextPage: function () {
    if(this.state.allPins.length < PinsStore.total()){
      var nextPage = this.state.page + 1;
      PinsUtil.fetchAllPins(nextPage);

      if(this.isMounted()) {
        this.setState({page: nextPage, loaded: false });
      }
    }
  },


  render: function () {
    var pins = this.state.allPins.map(function (pin) {
        return <PinsIndexItem key={pin.id} pin={pin} showComments={false}/>;
    });

    var loading;
    if(!this.state.loaded) {
      loading = <h2 className="loading">Loading</h2>;
    }

    return (
      <div className="landing-page">

        <Masonry
          className={'grid my-gallery-class masonry-container transitions-enabled infinite-scroll centered clearfix'} // default ''
          elementType={'div'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          >

          {pins}

          </Masonry>
          {loading}

      </div>
    );
  }

});

module.exports = PinsIndex;
