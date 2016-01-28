var Dispatcher = require('../dispatcher/dispatcher');
var PinsConstants = require('../constants/pins_constants');

var PinsActions = {
  receiveAllPins: function(pins){
    Dispatcher.dispatch({
      actionType: PinsConstants.ALL_PINS_RECEIVED,
      pins: pins
    });
  },

  receiveSinglePin: function(pin){
    Dispatcher.dispatch({
      actionType: PinsConstants.SINGLE_PIN_RECEIVED,
      pin: pin
    });
  }

};

module.exports = PinsActions;
