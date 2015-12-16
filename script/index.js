// ----------- Function Calls ---------------//
// Get a publish articles call for the index page
$(document).ready(function(){
  webDB.init();
  // blog.loadArticles();
  Article.tagsDropDown();
  Article.truncateArticles();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
  $('#aboutContent').hide();
  $('#repoContent').hide();
});
