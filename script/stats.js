// total number of articles and words
  // <length property>
// average word length across all posts
  // <figure out a way to map article and reduce> get into p tags an
// average word length by author


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
  $('#stats').append('<p>Total Number of Authors: ' + authorTotal + '</p>');
};

stats.displayWordCount = function() {
// go into each article's markdown and count total words... make an array of word count for each Articles ... add totals and send to html
  var wordCount = stats.blogArray.map(function(article){
    return article.markdown.length;
  });
  var sum = wordCount.reduce(function(previous, current) {
    return previous + current;
  });
  $('#stats').append('<p>Total Word Count: ' + sum + '</p>');
};

stats.displayAveWordCount = function() {
  
};


$.getJSON('script/hackerIpsum.json', function(blog) {
  stats.blogArray = blog;
}).done(
  stats.displayArtTotal,
  stats.displayAuthorTotal,
  stats.displayWordCount
);
