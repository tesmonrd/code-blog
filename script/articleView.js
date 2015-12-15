var articleView = {};

articleView.index = function() {
  var _renderAll = function() {
    $articles = $('#articles');
    $articles.show().siblings().hide();
    Article.all.forEach(function(article) {
      $articles.append(article.appendToDom());
    });
  };

  if (articleView.template) {
    _renderAll();
  } else {
    $.get('article.html', function(data, msg, xhr) {
      articleView.template = Handlebars.compile(data);
      _renderAll();
    });
  }
};

articleView.render = function(article) {

  return articleView.template(article);
};
