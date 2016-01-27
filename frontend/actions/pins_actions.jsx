var Dispatcher = require('../dispatcher/dispatcher');
var PinsConstants = require('../constants/pins_constants');

var PinsActions = {
  receiveAllPins: function(pins){
    Dispatcher.dispatch({
      actionType: PinsConstants.PINS_RECEIVED,
      pins: pins
    });
  }
};

module.exports = PinsActions;
