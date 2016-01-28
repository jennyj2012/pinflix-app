var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PinsConstants = require('../constants/pins_constants');
var PinsStore = new Store(Dispatcher);

var _pins = {};

var resetPins = function(pins){
  _pins = pins.slice();
};

var resetPin = function(pin){
  _pins[pin.id] = pin;
};

PinsStore.all = function () {
  return _pins.slice();
};

PinsStore.find = function (id) {
  return _pins[id];
};

PinsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PinsConstants.ALL_PINS_RECEIVED:
      resetPins(payload.pins);
      PinsStore.__emitChange();
      break;
    case PinsConstants.SINGLE_PIN_RECEIVED:
      resetPin(payload.pin);
      PinsStore.__emitChange();
      break;
    default:
      break;
  }
};

module.exports = PinsStore;
