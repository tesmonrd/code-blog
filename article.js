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
  // this.time = this.timeRead(this.publishedOn);
  collectedEntries.push(this);
};

// Article.prototype.timeRead = function(date) {
//   var time = new Date();
//   var day = parseInt(today.getDate());
//   var month = parseInt(today.getMonth()+1);
//   var year = parseInt(today.getFullYear());
//
//   var yr = parseInt(date.slice(0,4));
//   var mnth = parseInt(date,slice(5,7));
//   var dy = parseInt(date.slice(8,10));
//
//   var smallerSegments = 24*60*60*1000
//   var publishDate = new Date(yr, mnth, dy);
//   var dateToday = new Date(year, month, day);
//
//   var calcDay = Math.round(Math.abs((publishDate.getTime()- dateToday.getTime())/(smallerSegments)));
//   return
// }
Article.prototype.toHTML = function() {
  // var time = this.timeRead(this.publishedOn);
  $template = $('#template').clone();
  $template.removeAttr('id');
  $template.find('.title').html(this.title);
  $template.find('.author').html(this.author);
  $template.find('.author').attr('href', this.authorUrl);
  $template.find('.category').html(this.category);
  $template.find('.publishedOn').html(this.publishedOn);
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

var populateAuthorFilter = function() {
  for (var i = 0; i < collectedEntries.length; i++) {
    var getAuthors = collectedEntries[i].author;
    $('.authorItem').append().html('<option>' + getAuthors + '</option>');
  }
};

var populateCategoriesFilter = function() {
  for (var i = 0; i < collectedEntries.length; i++) {
    var getCategories = collectedEntries[i].category;
    $('.categoryItem').append().html('<option>' + getCategories + '</option>');
  }
};
