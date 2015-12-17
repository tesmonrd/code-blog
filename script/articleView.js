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
  });
};

articleView.index = function() {
  $('#aboutContent').hide();
  $('#repoContent').hide();
  $('#articles').empty();
  $('#articles').show();
  articleView.loadTemplate(Article.all);
  articleView.categoryPopulate();
  articleView.authorPopulate();
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

articleView.authorPopulate = function() {
  Article.all.forEach(function(article){
    var $cloneAuthorItem = $('.authorItem').clone();
    $cloneAuthorItem.removeAttr('class');
    $cloneAuthorItem.attr('value', article.author);
    $cloneAuthorItem.text(article.author);
    if($('#filterAuthor select').find('option[value="' + article.author + '"]').length === 0) {
      $('#filterAuthor select').append($cloneAuthorItem);
    };
  });
};

articleView.categoryPopulate = function() {
  Article.all.forEach(function(article){
    var $cloneCategoryItem = $('.categoryItem').clone();
    $cloneCategoryItem.removeAttr('class');
    $cloneCategoryItem.attr('value', article.category);
    $cloneCategoryItem.text(article.category);
    if($('#filterCategory select').find('option[value="' + article.category + '"]').length === 0) {
      $('#filterCategory select').append($cloneCategoryItem);
    }
  });
};
