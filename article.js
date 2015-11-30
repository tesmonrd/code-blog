var collectedEntries = [];
var blog = {};
blog.rawData = [];

var Article = function(blog) {
  this.title = blog.title;
  this.category = blog.category;
  this.author = blog.author;
  this.authorUrl = blog.authorUrl;
  this.publishedOn = blog.publishedOn;
  this.body = blog.body;
  collectedEntries.push(this);
}

Article.prototype.toHTML = function() {
  return '<article>' +
  '<h1>' + this.title + '</h1>' +
  '<h5>' + this.publishedOn + '</h5>' +
  '<li>' + this.author + ' ' + this.authorUrl+ '</li>' +
  '<p>' + this.body + '</p>'
  '</article>'
};

var buildComment = function () {
  for(var i = 0; i < blog.rawData.length; i++) {
    new Article(blog.rawData[i]);
  }
};
buildComment();
