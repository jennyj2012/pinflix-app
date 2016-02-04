var PinsActions = require('../actions/pins_actions');

var PinsUtil = {
  fetchAllPins: function (){
    $.get({
      url: "/api/pins",
      dataType: "json",
      success: function (pins) {
        PinsActions.receiveAllPins(pins);
      }
    });
  },

  fetchSinglePin: function (id, callback){

    $.get({
      url: "/api/pins/" + id,
      dataType: "json",
      success: function (pin) {
        PinsActions.receiveSinglePin(pin);
        if(callback){ callback(pin.id); }
      }
    });
  },

  createPin: function (formData, callback){
    $.post({
      url: "/api/pins/",
      dataType: "json",
      processData: false,
      contentType: false,
      data: formData,
      success: function (pin) {
        PinsActions.receiveSinglePin(pin);
        if(callback) { callback(pin.id); }
      }
    });
  },

  createPinComment: function (comment){
    $.post({
      url: "/api/comments",
      dataType: "json",
      data: {comment: comment},
      success: function (pin) {
        PinsActions.receiveSinglePin(pin);
      }
    });
  },

};

module.exports = PinsUtil;
