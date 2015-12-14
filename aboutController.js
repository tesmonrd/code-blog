var aboutController = {};

aboutController.index = function() {
  aboutView.render();
};

var aboutView = {};
aboutView.render = function() {
  $('#articles').hide();
  $('#about').fadeIn();
};
