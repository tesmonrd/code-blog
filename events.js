// create filter event for when option is selected with form
// filterBySelection= function(){
//   $('option').on('click',function(){
//     event.preventDefault();
//     $('article category:selected(.authorList)').hide();
//   });
// };
var sortByAuthor = function() {
  $('select[id="select-Author"]').change(function(){
    var selection = $('select option:selected').val();
    $('main').find('article:contains(' + selection + ')');
    if($(this).val() !== 'none'){
      $('.category:not(:contains(' + $(this).val() + '))').parent().hide();
    }
  });
};

var sortByCategory = function() {
  $('select[id="category"]').change(function(){
    $('#filterCategory').find('option:first').attr('selected','selected');
    $('main').find('article').show();
    if($(this).val() !== 'none'){
      $('.category:not(:contains(' + $(this).val() + '))').parent().hide();
    }
  });
};

blog.truncateArticles= function() {
  $('article p:not(:first-child)').hide();
  $('.read-on').on('click', function() {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};
