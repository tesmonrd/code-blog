var articleView = {};

articleView.index = function() {
  $('#articles').show();
  $('#aboutContent').hide();
  $('#repoContent').hide();
  var _renderAll = function() {
    $articles = $('#articles');
    $articles.fadeIn().siblings().hide();
    Article.all.forEach(function(article) {
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
  article.daysAgo =
    parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);

  article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';
  article.authorSlug = article.author;
  article.category = article.category;

  return articleView.template(article);
};
