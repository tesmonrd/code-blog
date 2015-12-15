var aboutView = {};

aboutView.index = function() {
  aboutView.ui();

  var _append = function(repos) {
    $('#aboutContent ul').append(aboutView.render(repos));
  };

  repos.all.filter(function(repos) {
    return stargazers_count; //filter by any property in the repo object
  }).map(_append)
};

aboutView.render = function () {
  $('#articles').hide();
  $('#aboutContent').fadeIn();
  return $('<li>').text(repo.full_name);
}

aboutView.ui = function() {
  var $about = $('#aboutContent');
  var $ul = $about.find('ul');

  $ul.empty();
  $about.fadeIn().siblings().hide();
};
