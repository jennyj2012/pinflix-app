var Dispatcher = require('../dispatcher/dispatcher');
var PinsConstants = require('../constants/pins_constants');
var BoardsConstants = require('../constants/boards_constants');

var PinsActions = {
  receiveAllPins: function (pins) {
    Dispatcher.dispatch({
      actionType: PinsConstants.ALL_PINS_RECEIVED,
      pins: pins
    });
  },

  receiveSinglePin: function (pin) {
    Dispatcher.dispatch({
      actionType: PinsConstants.SINGLE_PIN_RECEIVED,
      pin: pin
    });
  },

  recieveTotalPinCount: function (total) {
    Dispatcher.dispatch({
      actionType: PinsConstants.PIN_TOTAL_COUNT,
      total: total['total']
    });
  }

};

module.exports = PinsActions;
