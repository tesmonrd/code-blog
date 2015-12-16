// ----------- Function Calls ---------------//
$(document).ready(function(){
  webDB.init();
  Article.loadAll();
  Article.tagsDropDown();
  Article.truncateArticles();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
  $('#aboutContent').hide();
  $('#repoContent').hide();
});
