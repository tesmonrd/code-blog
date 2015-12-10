//Change Article name
webDB.init();
var article = {};
var articleFromPage = [];

function ArticlePreview() {
  this.title = $('#title').val();
  this.category = $('#category').val();
  this.author = $('#author').val();
  this.authorUrl = $('#authorUrl').val();
  this.publishedOn = $('#publishedOn').val();
  this.body = marked($('#body').val());    //need to call marked function on body
  articleFromPage.push(this);

  var copyObject = JSON.stringify({title: this.title, category: this.category, authorUrl: this.authorUrl, publishedOn: this.publishedOn, body: this.body});
  $('#copy-code').html(copyObject);
};

ArticlePreview.prototype.toHTML = function() {
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

ArticlePreview.prototype.publish = function() {
  var $template = this.toHTML();
  $('#sampleArticle').append($template);
};

ArticlePreview.prototype.insertRecord = function(callback) {
  webDB.execute(
    [
      {
        'sql': 'INSERT INTO articles (title, category, author, authorUrl, publishedOn, markdown) VALUES (?, ?, ?, ?, ?, ?);',
        'data': [this.title, this.category,this.author, this.authorUrl, this.publishedOn, this.markdown],
      }
    ],
    callback
  );
};

ArticlePreview.prototype.updateRecord = function(callback) {
  webDB.execute(
    [
      {
        'sql': 'UPDATE articles SET title = ?, category = ?, author = ?, authorUrl = ?, publishedOn = ?, markdown = ?, WHERE id= ?;',
        'data': [this.title, this.category,this.author, this.authorUrl, this.publishedOn, this.markdown, article.id],
      }
    ],
    callback
  );
};

ArticlePreview.prototype.deleteRecord = function(callback) {
  webDB.execute(
    [
      {
        'sql': 'DELETE FROM article WHERE id= ?;',
        'data': [articles.id],
      }
    ],
    callback
  );
};

var blogPost;

var buildArticle = function () {
  blogPost = new ArticlePreview(articleFromPage);
  blogPost.publish();
};

$('#Article').on('submit', function(event){
  event.preventDefault();
  buildArticle();
  blogPost.insertRecord(function(){
    console.log("newPostpublish");
  });
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
