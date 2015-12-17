function Article (opts) {
  Object.keys(opts).forEach(function(e, index, keys) {
    this[e] = opts[e];
  },this);

  this.markdown = opts.body || marked(this.markdown);
};

Article.prototype.insertRecord = function(callback) {
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

Article.prototype.updateRecord = function(callback) {
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

Article.prototype.deleteRecord = function(callback) {
  webDB.execute(
    [
      {
        'sql': 'DELETE FROM articles WHERE id= ?;',
        'data': [article.id],
      }
    ],
    callback
  );
};

Article.all = [];

Article.requestAll = function(next, callback) {
  $.getJSON('/script/hackerIpsum.json', function (data) {
    data.forEach(function(item) {
      var article = new Article(item);
      article.insertRecord();
    });
    next(callback);
  });
};

Article.loadAll = function(callback) {
  var callback = callback || function() {};

  if (Article.all.length === 0) {
    webDB.execute('SELECT * FROM articles ORDER BY publishedOn DESC;',
      function(rows) {
        if (rows.length === 0) {
          Article.requestAll(Article.loadAll, callback);
        } else {
          rows.forEach(function(row) {
            Article.all.push(new Article(row));
          });
          callback();
        }
      }
    );
  } else {
    callback();
  }
};

Article.tagsDropDown = function() {
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

Article.truncateArticles = function() {
  $('.body').children(':nth-child(n+5)').hide();
  $('.read-on').on('click', function(event) {
    event.preventDefault();
    $(this).prev('.body').children().show();
    $(this).hide();
  });
};

Article.find = function(id, callback) {
  webDB.execute(
    [
      {
        'sql': 'SELECT * FROM articles WHERE id = ?',
        'data': [id]
      }
    ],
    callback
  );
};

Article.prototype.truncateTable = function(callback) {
  webDB.execute(
    [
      {
        'sql': 'DELETE FROM articles;'
      }
    ],
    callback
  );
};
