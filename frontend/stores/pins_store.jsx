var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PinsConstants = require('../constants/pins_constants');
var PinsStore = new Store(Dispatcher);

var _pins = [];
var _total = 0;

var resetPins = function (pins){
  _pins = pins;
};

var addPins = function (pins) {

  pins.forEach(function (pin) {
    updatePin(pin);
  }.bind(this));
}

var addPin = function (pin) {
  _pins.push(pin);
};

var updatePin = function (pin) {
  var idx;
  for(var i = 0; i < _pins.length; i++){
    if(_pins[i].id === pin.id){
      idx = i;
    }
  }

  if(typeof idx === "undefined"){
    addPin(pin);
  } else {
    _pins[idx] = pin;
  }
};

var updateTotalCount = function (total) {
  _total = total;
}

PinsStore.all = function () {
  return _pins.slice();
};

PinsStore.find = function (id) {
  var idx;
  for(var i = 0; i < _pins.length; i++){
    if(_pins[i].id === id){
      idx = i;
    }
  }
  return _pins[idx];
};

PinsStore.findByBoardId = function (id) {

  return _pins.filter(function (pin) {
    return pin.board_id === id;
  });
};

PinsStore.total = function () {
  return _total;
}

PinsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PinsConstants.ALL_PINS_RECEIVED:
      addPins(payload.pins);
      PinsStore.__emitChange();
      break;
    case PinsConstants.SINGLE_PIN_RECEIVED:
      updatePin(payload.pin);
      PinsStore.__emitChange();
      break;
    case PinsConstants.PIN_TOTAL_COUNT:
      updateTotalCount(payload.total);
      PinsStore.__emitChange();
      break;
    default:
      break;
  }
};

module.exports = PinsStore;
