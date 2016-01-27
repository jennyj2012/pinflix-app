var PinsActions = require('../actions/pins_actions');

var PinsUtil = {
  fetchPins: function (){

    $.get({
      url: "/pins/",
      dataType: "json",
      success: function (pins) {
        PinsActions.receiveAllPins(pins);
      }
    });

  }
};

module.exports = PinsUtil;
