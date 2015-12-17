var articleView = {};


articleView.renderGroup = function(articleList) {
  $articles = $('#articles');
  $articles.fadeIn().siblings().hide();
  Article.all.forEach(function(article) {
    $articles.append(articleView.render(article));
  });
};
articleView.loadTemplate = function(articles) {
  $.get('template.html', function(data, msg, xhr) {
    articleView.template = Handlebars.compile(data);
    articleView.renderGroup(articles);
    console.log("template get");
  });
};

articleView.index = function() {
  $('#aboutContent').hide();
  $('#repoContent').hide();
  $('#articles').empty();
  $('#articles').show();
  Article.truncateArticles();
  articleView.loadTemplate(Article.all);
};

articleView.render = function(article) {
  article.daysAgo =
    parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);

  article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';
  article.authorSlug = article.author;
  article.category = article.category;

  return articleView.template(article);
};
