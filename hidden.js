var articleFromPage = [];

var Article = function() {
  this.title = $('#title').val();
  this.category = $('#category').val();
  this.author = $('#author').val();
  this.authorUrl = $('#authorUrl').val();
  this.publishedOn = $('#publishedOn').val();
  this.body = $('#body').val();
  articleFromPage.push(this);

};

Article.prototype.toHTML = function() {
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

Article.prototype.publish = function() {
  var $template = this.toHTML();
  $('#sampleArticle').append($template);
};

var buildComment = function () {
  var blogPost = new Article (articleFromPage);
  blogPost.publish();
};

$('#Article').on('submit', function(event){
  event.preventDefault();
  buildComment();
  $('#copy-code').html(articleFromPage.toString);
});
