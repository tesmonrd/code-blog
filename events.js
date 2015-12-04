var sortByAuthor = function(event) {
  event.preventDefault();
  $('main').find('article').hide();
  if (event.target.value !== 'none') {
    $('main').find('article').filter(function() {
      return $(this).attr('data-author') === event.target.value.replace(/\ /g, '');
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
      return $(this).attr('data-category') === event.target.value;
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

// ------------ HAMBURGER-CROSS CLICK FUNCTION ----------//

$( '.hamburger' ).click(function() {
  $( 'nav' ).slideToggle( 'slow', function() {
    $( '.hamburger' ).hide();
    $( '.cross' ).show();
    $( '.forms' ).show();
    $( '.menu' ).show();
  });
});

$( '.cross' ).click(function() {
  $( 'nav' ).slideToggle( 'slow', function() {
    $( '.forms' ).hide();
    $( '.menu' ).hide();
    $( '.cross' ).hide();
    $( '.hamburger' ).show();
  });
});
