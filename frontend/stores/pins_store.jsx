var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PinsConstants = require('../constants/pins_constants');
var PinsStore = new Store(Dispatcher);

var _pins = {};

var resetPins = function(pins){
  _pins = pins.slice();
};

var updatePin = function(pin){
  var idx;
  for(var i = 0; i < _pins.length; i++){
    if(_pins[i].id === pin.id){
      idx = i;
    }
  }
  _pins[idx] = pin;
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
      updatePin(payload.pin);
      PinsStore.__emitChange();
      break;
    default:
      break;
  }
};

module.exports = PinsStore;
