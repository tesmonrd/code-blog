// ----------- Function Calls ---------------//
$(document).ready(function(){
  webDB.init();
  blog.loadArticles();

  // sortRawData();
  buildArticle();
  blog.truncateArticles();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
});
