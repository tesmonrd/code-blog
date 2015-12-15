var aboutView = {};

aboutView.index = function() {
  aboutView.ui();
  aboutView.render();
};

aboutView.render = function () {
  repos.all.forEach(function(repo){
    $('#aboutContent ul').append('<li>' + repo.full_name + '</li>');
  });
};

aboutView.ui = function() {
  var $about = $('#aboutContent');
  var $ul = $about.find('ul');
  $('#articles').hide();
  $about.fadeIn();
};
