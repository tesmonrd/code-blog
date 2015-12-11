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

// ----------- About page show/hide -------------------//
$('#aboutContent').hide();
$('#about').click(function(){
  $('#aboutContent').show();
  $('main').hide();
});

$('#home').click(function() {
  $('main').show();
  $('#aboutContent').hide();
});
