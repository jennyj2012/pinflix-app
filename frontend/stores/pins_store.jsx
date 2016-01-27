var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PinsConstants = require('../constants/pins_constants')
var PinsStore = new Store(Dispatcher);

var _pins = {};

var resetPins = function(pins){
  _pins = pins.slice();
};

PinsStore.all = function () {
  return _pins.slice();
};

PinsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PinsConstants.PINS_RECEIVED:
      resetPins(payload.pins);
      PinsStore.__emitChange();
      break;
    default:
      break;
  }
};

module.exports = PinsStore;
