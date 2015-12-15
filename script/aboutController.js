var aboutController = {};

aboutController.index = function() {
  repos.requestAll(aboutView.index);
};
