var sortByAuthor = function(event) {
  event.preventDefault();
  $('main').find('article').hide();
  if (event.target.value !== 'none') {
    $('main').find('article').filter(function() {
      return $(this).data('author') === event.target.value;
    }).show();
  } else {
    $('main').find('article').show();
  }
};

var sortByCategory = function(event) {
  event.preventDefault();
  $('main').find('article').hide();
  if (event.target.value !== 'none') {
    $('main').find('article').filter(function() {
      return $(this).data('category') === event.target.value;
    }).show();
  } else {
    $('main').find('article').show();
  }
};

blog.truncateArticles = function() {
  $('article p:not(:first-child)').hide();
  $('.read-on').on('click', function() {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};

$( '.cross' ).hide();
// $( '.menu' ).hide();
$( '.hamburger' ).click(function() {
  $( '.menu' ).slideToggle( 'slow', function() {
    $( '.hamburger' ).hide();
    $( '.cross' ).show();
  });
});

$( '.cross' ).click(function() {
  $( '.menu' ).slideToggle( 'slow', function() {
    $( '.cross' ).hide();
    $( '.hamburger' ).show();
  });
});
