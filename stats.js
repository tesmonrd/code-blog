// total number of articles and words
  // <length property>
// average word length across all posts
  // <figure out a way to map article and reduce> get into p tags an
// average word length by author

function pluck(property, collection) {
  console.log(collection);
  return collection.map(function(e) {
    return e[property];
  });
}

function unique(collection) {
  var length = collection ? collection.length : 0
  if(!length) { return []; }

  var seen = [];
  collection.forEach(function(e) {
    if (seen.indexOf(e) < 0) { sen.push(e); }
  });
  return seen;
}



var distinct = unique( pluck(x) );

function $numberOfArticles(articles) {
  return $('<p>Number of articles: ' + articles.length + '</p>');
}

function $numberOfAuthors(articles) {
  var numAuthors = distinct('author', articles)
}

var $statsComponent = function(blog) {
  var component = $('<div>');
  component.append([
    $headline,
    $numberOfArticles(blog),
    $numberOfAuthors(blog),
  ]);
}

function renderStats(blog) {
  $('#stats').replaceWith($statsComponent(blog));
}

function renderError(message, xhr) {
  $('#stats').replaceWith($('<p>Error: <code>' + message + xhr + '</code></p>'))
}

function stats(data, message)

$.getJSON('script/blogArticles.js', stats);
