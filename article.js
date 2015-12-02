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
  $template.find('.title').html(this.title);
  $template.find('.author').html(this.author);
  $template.find('.author').attr('href', this.authorUrl);
  $template.find('.category').html(this.category);
  $template.find('.publishedOn').html(this.publishedOn);
  $template.find('.body').html(this.body);
  
  $('main').append($template);
  $('.filterAuthor').find('.author').html(this.author);
  $('.filter').append('.filterAuthor');
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
