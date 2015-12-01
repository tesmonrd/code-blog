blog.handleMainNav = function() {
  $('.tab').on('click', function(e) {
    $('article').hide();
  })
}

blog.truncateArticles= function() {
  $('article p:not(:first-child)').hide();
  $('.read-on').on('click',function() {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};
