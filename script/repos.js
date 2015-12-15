var repos = {};

repos.all = [];

repos.requestAll = function(callback) {
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/tesmonrd/repos' + '?sort=updated&per_page=100',
    headers: { Authorization: 'token ' + githubToken}
  }).done(function(data){
    repos.all = data;
  }).done(callback);
};
