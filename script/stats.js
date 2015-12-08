// total number of articles and words
  // <length property>
// average word length across all posts
  // <figure out a way to map article and reduce> get into p tags an
// average word length by author

$.getJSON('script/hackerIpsum.json', function(blog) {
  var blogArray = blog;
  console.log(blogArray);
  articleTotal = blog.length;
  $('#stats').append('<p>Total Number of Articles: ' + articleTotal + '</p>');




});
