var PinsActions = require('../actions/pins_actions');

var PinsUtil = {
  fetchAllPins: function (){
    $.get({
      url: "/pins",
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

  createPinComment: function (body, pin_id){
    var current_url = document.location.pathname.slice(1);
    var author_id = parseInt(current_url.slice(current_url.indexOf("/")+1));
    //refactor author id
    $.post({
      url: "/comments",
      dataType: "json",
      data: {comment: {body: body, pin_id: pin_id, author_id: author_id}},
      success: function (pin) {
        PinsActions.receiveSinglePin(pin);
      }
    });
  },

};

module.exports = PinsUtil;
