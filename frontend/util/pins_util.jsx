var PinsActions = require('../actions/pins_actions');

var PinsUtil = {
  fetchAllPins: function (){
    $.get({
      url: "/pins/",
      dataType: "json",
      success: function (pins) {
        PinsActions.receiveAllPins(pins);
      }
    });
  },

  fetchSinglePin: function (id){
    $.get({
      url: "/pins/" + id,
      dataType: "json",
      success: function (pin) {
        PinsActions.receiveSinglePin(pin);
      }
    });
  },

};

module.exports = PinsUtil;
