var blog = {};
blog.articles = [];

blog.loadArticles = function () {
  $.get('template.html', function(data, message, xhr){
    Article.prototype.template = Handlebars.compile(data);
    $.ajax({
      type: 'HEAD',
      url: '/script/hackerIpsum.json',
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
  $.getJSON('/script/hackerIpsum.json', blog.updateFromJSON);
  console.log("hackerIpsum get");
};

blog.updateFromJSON = function(data) {
  data.forEach(function(item) {
    var article = new Article(item);
    blog.articles.push(article);
    article.insertRecord();
  });
  // blog.initArticles();
};

blog.fetchFromDB = function(callback) {
  callback = callback || function () {};
  webDB.execute(
    'SELECT * FROM articles ORDER BY publishedOn DESC;',
    function (resultArray) {
      resultArray.forEach(function(ele) {
        blog.articles.push(new Article(ele));
      });
      blog.render();
      callback;
    }
  );
};

// blog.initArticles = function() {
//   blog.sortRawData();
//   if ($('.articles').length) {
//     blog.render();
//   };
// };
//
// blog.sortRawData = function() {
//   blog.articles.sort(function(a, b) {
//     if(a.publishedOn > b.publishedOn) {return -1;}
//     if(a.publishedOn < b.publishedOn) {return 1;}
//     return 0;
//   });
// };

blog.render = function() {
  blog.articles.forEach(function(article) {
    console.log(article);
    article.appendToDom();
  });
  webDB.execute(
    'SELECT * FROM articles;',
    function (results) {
      results.forEach(function(ele) {
        blog.appendArticle(ele);
      });
    });
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  article.truncateArticles();
  article.tagsDropDown();
};
