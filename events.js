// create filter event for when option is selected with form
// blog.filterByAuthor= function() {
//   $('')
//

blog.truncateArticles= function() {
  $('article p:not(:first-child)').hide();
  $('.read-on').on('click',function() {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};
