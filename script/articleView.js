var articleView = {};

articleView.index = function() {
  $('#articles').show();
  $('#aboutContent').hide();
  $('#repoContent').hide();
  $.get('template.html', function(data, msg, xhr) {
    articleView.template = Handlebars.compile(data);
  });
};

articleView.render = function() {
  $('#articles').empty();
  blog.articles.forEach(function(article) {
    $('#articles').append(articleView.template(this));
  });
};
