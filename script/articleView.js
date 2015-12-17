var articleView = {};


articleView.renderGroup = function(articleList) {
  $('#articles').fadeIn().append(
    articleList.map(function(a){
      return articleView.render(a);
    })
  );
};


articleView.render = function(article) {
  article.daysAgo =
    parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);

  article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';
  article.authorSlug = article.author.replace(/\W/g, '-');
  article.category = article.category;

  return articleView.template(article);
};

articleView.index = function() {
  $('#aboutContent').hide();
  $('#repoContent').hide();
  $('#articles').empty();
  $('#articles').show();
  articleView.renderGroup(Article.all);
  articleView.categoryPopulate();
  articleView.authorPopulate();
  Article.truncateArticles();
};

articleView.show = function(articles) {
  articleView.renderGroup(articles);
};

//------------------- Filter Functions -----------------//
articleView.authorPopulate = function() {
  Article.all.forEach(function(article){
    var $cloneAuthorItem = $('.authorItem').clone();
    $cloneAuthorItem.removeAttr('class');
    $cloneAuthorItem.attr('value', article.authorSlug);
    $cloneAuthorItem.text(article.author);
    if($('#filterAuthor select').find('option[value="' + article.authorSlug + '"]').length === 0) {
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
