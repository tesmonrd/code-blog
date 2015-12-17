// ----------- Function Calls ---------------//
$(document).ready(function(){
  webDB.init();
  articlesController.index();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
  $('#aboutContent').hide();
  $('#repoContent').hide();
});
