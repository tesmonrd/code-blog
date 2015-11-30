var collectedEntries = [];

var Article = function(title, category, author, authorUrl, publishedOn, body){
  this.title = title;
  this.category = category;
  this.author = author;
  this.authorUrl = authorUrl;
  this.publishedOn = publishedOn;
  this.body = body;
  collectedEntries.push(this);
}

Article.prototype.toHTML = function() {
  return "<article>" +
  "<h1>" + this.title + "</h1>" +
  "<h5>" + this.publishedOn + "</h5>" +
  "<li>" + this.author + " " + this.authorUrl+ "</li>" +
  "<p>" + this.body + "</p>"
  "</article>"
};
