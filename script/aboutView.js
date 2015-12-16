var aboutView = {};

aboutView.index = function() {
  aboutView.ui();
  aboutView.render();
};

aboutView.render = function () {
  $('#repoContent ul').empty();
  repos.all.forEach(function(repo){
    $('#repoContent ul').append('<li>' + repo.full_name + '</li>');
  });
};

aboutView.ui = function() {
  var $about = $('#aboutContent');
  var $repo = $('#repoContent');
  var $ul = $repo.find('ul');
  $('#articles').hide();
  $about.fadeIn();
  $repo.fadeIn();
};
