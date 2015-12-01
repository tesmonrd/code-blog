var collectedEntries = [];
var blog = {};
blog.rawData = [];
var $template = $('#template').clone();

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
  $('.title').text(this.title);
  $('.author').text(this.author);
  $('.authorUrl').text(this.authorUrl);
  $('.category').text(this.category);
  $('.publishedOn').text(this.publishedOn);
  $('.body').text(this.body);
  $
  // return '<article>' +
  // '<h2>' + this.title + '</h2>' +
  // '<h5>' + this.publishedOn + '</h5>' +
  // '<li>' + this.author + ' ' + this.authorUrl+ '</li>' +
  // this.body +
  // '</article>'
};

var buildComment = function () {
  for(var i = 0; i < blog.rawData.length; i++) {
    new Article(blog.rawData[i]);
  }
};
