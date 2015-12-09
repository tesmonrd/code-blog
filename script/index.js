// ----------- Function Calls ---------------//
$(document).ready(function(){
  webDB.init();
  sortRawData();
  buildArticle();
  blog.truncateArticles();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
});
