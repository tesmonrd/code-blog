var repos = {};

repos.all = [];

repos.requestAll = function(callback) {
  $.ajax({
    type: 'GET',
    url: '/github/users/tesmonrd/repos' + '?sort=updated&per_page=100',
  }).done(function(data){
    repos.all = data;
    console.log(repos.all);
  }).done(callback);
};
