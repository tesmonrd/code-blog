var blog = {};
blog.articles = [];

blog.loadArticles = function () {
  $.get('script/template.handlebars', function(data, message, xhr){
    Article.prototype.template = Handlebars.compile(data);
    $.ajax({
      type: 'HEAD',
      url: 'script/hackerIpsum.json',
      success: blog.fetchArticles
    });
    console.log('ajaxGet');
  });
};

blog.fetchArticles = function(data,msg,xhr){
  var eTag = xhr.getResponseHeader('eTag');
  if(typeof localStorage.articlesEtag == 'undefined' || localStorage.articlesEtag != eTag){
    console.log('cache miss!');
    localStorage.articlesEtag = eTag;

    blog.articles = [];
    webDB.execute(
      'DELETE FROM articles;',
      blog.fetchJSON);
  } else {
    console.log('cache hit');
    blog.fetchFromDB();
  };
};

blog.fetchJSON = function() {
  $.getJSON('script/hackerIpsum.json', blog.updateFromJSON);
  console.console.log("hackerIpsum get");
};

blog.updateFromJSON = function(data) {
  data.forEach(function(item) {
    var article = new Article(item);
    blog.articles.push(article);
    article.insertRecord();
  });
  blog.initArticles();
};

blog.fetchFromDB = function(callback) {
  callback = callback || function () {};
  webDB.execute(
    'SELECT * FROM articles ORDER BY publishedOn DESC;',
    function (resultArray) {
      resultArray.forEach(function(ele) {
        blog.articles.push(new Article(ele));
      });
      blog.initArticles();
      callback();
    }
  );
};

blog.initArticles = function() {
  blog.sortRawData();
  if ($('.articles').length) {
    blog.render();
  };
};

blog.sortRawData = function() {
  blog.articles.sort(function(a, b) {
    if(a.publishedOn > b.publishedOn) {return -1;}
    if(a.publishedOn < b.publishedOn) {return 1;}
    return 0;
  });
};

blog.render = function() {
  blog.articles.forEach(blog.appendArticle);
  webDB.execute(
    'SELECT * FROM articles;',
    function (results) {
      results.forEach(function(ele) { blog.appendArticle(ele); });
    });
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  blog.truncateArticles();
  article.tagsDropDown();
};

blog.appendArticle = function() {
  $('.articles').append(new Article().toHTML());
};

blog.truncateArticles = function() {
  $('article p:not(:first-child)').hide();
  $('.read-on').on('click', function(event) {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};
