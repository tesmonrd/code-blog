// ----------- Function Calls ---------------//
// Get a publish articles call for the index page
$(document).ready(function(){
  webDB.init();
  blog.loadArticles();

  sortRawData();
  blog.truncateArticles();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
});
