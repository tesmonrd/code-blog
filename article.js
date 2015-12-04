var collectedEntries = [];
var blog = {};
blog.rawData = [];

var Article = function(blog) {
  this.title = blog.title;
  this.category = blog.category;
  this.author = blog.author;
  this.authorSlug = blog.author.replace(/\ /g, '');
  this.authorUrl = blog.authorUrl;
  this.publishedOn = blog.publishedOn;
  this.body = blog.body;
  this.time = this.timeRead(this.publishedOn);
  collectedEntries.push(this);
};

Article.prototype.timeRead = function(date) {
  var today = new Date();
  var day = parseInt(today.getDate());
  var month = parseInt(today.getMonth()+1);
  var year = parseInt(today.getFullYear());

  var yr = parseInt(date.slice(0,4));
  var mnth = parseInt(date.slice(5,7));
  var dy = parseInt(date.slice(8,10));

  var smallerSegments = 24*60*60*1000;
  var publishDate = new Date(yr, mnth, dy);
  var dateToday = new Date(year, month, day);

  var calcDay = Math.round(Math.abs((publishDate.getTime()- dateToday.getTime())/(smallerSegments)));
  return calcDay;
};

Article.prototype.toHTML = function() {
  var time = this.timeRead(this.publishedOn);
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

Article.prototype.tagsDropDown = function() {
  var $cloneCategoryItem = $('.categoryItem').clone();
  $cloneCategoryItem.removeAttr('class');
  $cloneCategoryItem.attr('value', this.category);
  $cloneCategoryItem.text(this.category);
  if($('#filterCategory select').find('option[value="' + this.category + '"]').length === 0) {
    $('#filterCategory select').append($cloneCategoryItem);
  }
  var $cloneAuthorItem = $('.authorItem').clone();
  $cloneAuthorItem.removeAttr('class');
  $cloneAuthorItem.attr('value', this.author);
  $cloneAuthorItem.text(this.author);
  if($('#filterAuthor select').find('option[value="' + this.author + '"]').length === 0) {
    $('#filterAuthor select').append($cloneAuthorItem);
  };
};

Article.prototype.publish = function() {
  var $template = this.toHTML();
  $('main').append($template);
}
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
    blogPost.publish();
    blogPost.tagsDropDown();
  }
};
