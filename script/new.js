//Change Article name
webDB.init();
var articleFromPage = [];

var ArticlePreview = function() {
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
        'sql': 'INSERT INTO article (title, category, author, authorUrl, publishedOn, markdown) VALUE (?, ?, ?, ?, ?, ?);',
        'data': [this.title, this.category,this.author, this.authorUrl, this.publishedOn, this.body],
      }
    ],
    callback
  );
};

ArticlePreview.prototype.updateRecord = function(callback) {
  //update article record in databse
  webDB.execute(
    [
      {
        'sql': 'UPDATE article SET title = ?, category = ?, author = ?, authorUrl = ?, publishedOn = ?, markdown = ?, WHERE id= ?',
        'data': [this.title, this.category,this.author, this.authorUrl, this.publishedOn, this.markdown, article.id],
      }
    ],
    callback
  );
};

var buildArticle = function () {
  var blogPost = new ArticlePreview (articleFromPage);
  blogPost.publish();

};

$('#Article').on('submit', function(event){
  event.preventDefault();
  buildArticle();
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
