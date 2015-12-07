var articleFromPage = [];

var Article = function() {
  this.title = $('#title').val();
  this.category = $('#category').val();
  this.author = $('#author').val();
  this.authorUrl = $('#authorUrl').val();
  this.publishedOn = $('#publishedOn').val();
  this.body = $('#body').val();    //need to call marked function on body
  articleFromPage.push(this);

  var copyObject = {title: this.title, category: this.category, authorUrl: this.authorUrl, publishedOn: this.publishedOn, body: this.body};
  var copyObjectString= JSON.stringify(copyObject);
  $('#copy-code').html(copyObjectString);
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
});

//highlight code
$('pre code').each(function(i, block) {
  hljs.highlightBlock(block);
});
