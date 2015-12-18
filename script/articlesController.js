var articlesController = {};

articlesController.index = function() {
  Article.loadAll(articleView.index);
};

articlesController.template = function(ctx, next) {
  if(articleView.template) {
    next();
  } else {
    $.get('/template.html', function(data, msg, xhr) {
      articleView.template = Handlebars.compile(data);
      next();
    }).done();
  }
};

articlesController.category = function(ctx, next) {
  var categoryData = function(data) {
    ctx.articles = data;
    next();
  };
  Article.findByCategory(ctx.params.category, categoryData);
};

articlesController.author = function(ctx, next) {
  var authorData = function(data) {
    ctx.articles = data;
    next();
  };
  Article.findByAuthor(ctx.params.author, authorData);
};

articlesController.show = function(ctx, next) {
  articleView.show(ctx.articles);
};
