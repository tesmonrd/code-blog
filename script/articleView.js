var articleView = {};

// articleTemplate --> render group
articleView.loadTemplate = function(articles) {
  $.get('/template.html', function(data, msg, xhr) {
    articleView.template = Handlebars.compile(data);
    articleView.renderGroup(articles);
  }).done();
};

articleView.renderGroup = function(articleList) {
  $('#articles')
  .fadeIn()
  .hide()
  .append(
    articleList.map(function(article){
      return articleView.render(article);
    })
  )
  .siblings().hide();
};



articleView.index = function() {
  $('#aboutContent').hide();
  $('#repoContent').hide();
  $('#articles').empty();
  $('#articles').show();
  articleView.loadTemplate(Article.all);
  Article.truncateArticles();
};

articleView.render = function(article) {
  article.daysAgo =
    parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);

  article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';
  article.authorSlug = article.author;
  article.category = article.category;

  return articleView.template(article);
};

articleView.show = function(articles) {
  articleView.renderGroup(articles);
};
