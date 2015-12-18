// ----------- Function Calls ---------------//
$(document).ready(function(){
  webDB.init();
  $('#filterAuthor').change(sortByAuthor);
  $('#filterCategory').change(sortByCategory);
});
