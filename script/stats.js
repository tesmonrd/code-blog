// total number of articles and words
  // <length property>
// average word length across all posts
  // <figure out a way to map article and reduce> get into p tags an
// average word length by author
webDB.init();

var stats = {};
// var stats.uniqueAuthors = [];

stats.displayArtTotal = function() {
  var articleTotal = stats.blogArray.length;
  $('#stats').append('<p>Total Number of Articles: ' + articleTotal + '</p>');
};


// Consider breaking into first part function find authors, and second printAuthor function
stats.displayAuthorTotal = function() {
  var authorLog = [];
  stats.blogArray.forEach(function(article){
    if(authorLog.indexOf(article.author) === -1){
      authorLog.push(article.author);
    };
  });
  var authorTotal = authorLog.length;
  $('#stats').append('<p>Total Number of Authors: ' + authorTotal + '</p>');
};

stats.displayWordCount = function() {
  var wordCount = stats.blogArray.map(function(article){
    return article.markdown.length;
  });
  var sum = wordCount.reduce(function(previous, current) {
    return previous + current;
  });
  $('#stats').append('<p>Total Word Count: ' + sum + '</p>');
};

// -----------------------------------------------------------------//
stats.wordCount = function(str) {
  return str.replace(/[#,\n]/g,' ').match(/\b\w+/g);
};

// -----------------------------------------------------------------//
stats.displayAveWordCount = function() {
  // divide total word length by total words
  var splitWord = stats.blogArray.map(function(article){
    return article.markdown.replace(/[#,\n]/g,' ').match(/\b\w+/g);;
  });

  var totalWords = splitWord.reduce(function(previous, current) {
    return previous + current;
  });
};

// -----------------------------------------------------------------//
// stats.wordsPerAuthor = function() {
//   stats.uniqueAuthors.forEach(function(element, index, array) {
//     var countTemp = 0;
//     var getAuthorWords = function(art) {
//       if (art.author === element) {
//         countTemp += stats.wordCound(art.markdown).length;
//       };
//     };
//     stats.allArticles.forEach(getAuthorWords);
//     stats.eachAuthorWords.push(countTemp);
//   });
//   stats.uniqueAuthors.forEach(function(element, index, array) {
//     $('#stats').append('<p> Number of Words ' + element + ' has written: ' + )
//   })
// }

$.getJSON('script/hackerIpsum.json', function(blog) {
  stats.blogArray = blog;
}).done(
  stats.displayArtTotal,
  stats.displayAuthorTotal,
  stats.displayWordCount,
  stats.displayAveWordCount
);
