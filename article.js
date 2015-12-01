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
  $template = $('#template').clone();
  $template.removeAttr('id');
  $template.find('.title').text(this.title);
  $template.find('.author').text(this.author);
  $template.find('.authorUrl').text(this.authorUrl);
  $template.find('.category').text(this.category);
  $template.find('.publishedOn').text(this.publishedOn);
  $template.find('.body').html(this.body);
  $('main').append($template);
};

var sortRawData = function() {
  blog.rawData.sort(function(a, b) {
    if(a.publishedOn > b.publishedOn) {return -1;}
    if(a.publishedOn < b.publishedOn) {return 1;}
    return 0;
  });
};

var buildComment = function () {
  for(var i = 0; i < blog.rawData.length; i++) {
    var blogPost = new Article(blog.rawData[i]);
    blogPost.toHTML();
  }
};
