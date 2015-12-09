// total number of articles and words
  // <length property>
// average word length across all posts
  // <figure out a way to map article and reduce> get into p tags an
// average word length by author

// function pluck(property, collection) {
//   console.log(collection);
//   return collection.map(function(e) {
//     return e[property];
//   });
// };

var stats = {};

stats.displayArtTotal = function() {
  var articleTotal = stats.blogArray.length;
  $('#stats').append('<p>Total Number of Articles: ' + articleTotal + '</p>');
};

stats.displayAuthorTotal = function() {
  var authorLog = [];
  stats.blogArray.forEach(function(article){
    if(authorLog.indexOf(article.author) === -1){
      authorLog.push(article.author);
    };
  });
  var authorTotal = authorLog.length;
  $('#stats').append('<p>Total Number of Authors: ' + authorTotal + '</p>')
};

$.getJSON('script/hackerIpsum.json', function(blog) {
  stats.blogArray = blog;
}).done(
  stats.displayArtTotal,
  stats.displayAuthorTotal
);
