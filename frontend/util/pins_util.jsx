var PinsActions = require('../actions/pins_actions');

var PinsUtil = {
  fetchAllPins: function (payload) {
    $.get({
      url: "/api/pins",
      dataType: "json",
      data: payload,
      success: function (pins) {
        PinsActions.receiveAllPins(pins);
      }
    });
  },

  fetchTotal: function () {
    $.get({
      url: "/api/total/pins",
      dataType: "json",
      success: function (total) {
        PinsActions.recieveTotalPinCount(total);
      }
    })
  },

  fetchSinglePin: function (id, callback) {
    $.get({
      url: "/api/pins/" + id,
      dataType: "json",
      success: function (pin) {
        PinsActions.receiveSinglePin(pin);
        if(callback){ callback(pin.id); }
      }
    });
  },

  createPin: function (formData, callback) {
    $.post({
      url: "/api/pins/",
      dataType: "json",
      processData: false,
      contentType: false,
      data: formData,
      success: function (pin) {
        PinsActions.receiveSinglePin(pin);
        if(callback) { callback(pin.id); }
      },
      error: function (xhr, statusText, errorThrown) {
        if(callback) { callback(errorThrown); }
      }
    });
  },

  createPinComment: function (comment) {
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
