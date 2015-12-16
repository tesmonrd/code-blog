var articlesController = {};

articlesController.index = function() {
  blog.loadArticles(articleView.index);
};
// clear on load... once it works
