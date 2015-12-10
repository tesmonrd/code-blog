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

Article.prototype.insertRecord = function(callback) {
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

Article.prototype.updateRecord = function(callback) {
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

Article.prototype.deleteRecord = function(callback) {
  // Delete article record in database
  webDB.execute(
    [
      {
        'sql': 'DELETE FROM article WHERE id= ?',
        'data': [article.id],
      }
    ],
    callback
  );
};

Article.prototype.publish = function() {
  var $template = this.toHTML();
  $('main').append($template);
};


// ------------------------------------
