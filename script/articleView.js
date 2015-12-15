var articleView = {};

articleView.index = function() {
  $('#aboutContent').hide();
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
    $.get('template.html', function(data, msg, xhr) {
      articleView.template = Handlebars.compile(data);
      _renderAll();
    });
  }
};
