var articleView = {};

articleView.index = function() {
  $('#aboutContent').hide();
  $('#repoContent').hide();
  var _renderAll = function() {
    $articles = $('#articles');
    $articles.show();
    blog.articles.forEach(function(article) {
      $articles.append(articleView.render(article));
    });
  };

  if (articleView.template) {
    _renderAll();
  } else {
    $.get('template.html', function(data, msg, xhr) {
      articleView.template = Handlebars.compile(data);
      _renderAll();
    });
  }
};

articleView.render = function(article) {

  return articleView.template();
};
