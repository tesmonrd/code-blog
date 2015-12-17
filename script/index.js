// ----------- Function Calls ---------------//
$(document).ready(function(){
  webDB.init();
  articlesController.index();
  Article.tagsDropDown();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
  $('#aboutContent').hide();
  $('#repoContent').hide();
});
