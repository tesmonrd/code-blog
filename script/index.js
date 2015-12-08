// ----------- Function Calls ---------------//
$(document).ready(function(){
  sortRawData();
  buildArticle();
  blog.truncateArticles();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
});
