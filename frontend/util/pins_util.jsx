var PinsActions = require('../actions/pins_actions');

var PinsUtil = {
  fetchPins: function (id){

    $.get({
      url: "/pins/" + id,
      data: { id: id },
      dataType: json,
      success: function (pins) {
        PinsActions.receiveAllPins(pins);
      }
    });

  }
};

module.exports = PinsUtil;
