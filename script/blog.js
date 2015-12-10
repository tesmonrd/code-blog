var blog = {};
blog.articles = [];

blog.loadArticles = function () {
  $.get('script/template.handlebars', function(data, message, xhr){
    Article.prototype.template = Handlebars.compile(data);
    $.ajax({
      typle: 'HEAD',
      url: 'scripts/hackerIpsum.json',
      success: blog.fetchArticles
    });
  });
};

blog.checkForNewArticles = function(data,msg,xhr){
    var eTag = xhr.getResponseHeader('eTag');
    if(!localStorage.articlesEtag || localStorage.articlesEtag != eTag){
      console.log('cache miss!');
      localStorage,articlesEtag = eTag;

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
  $.getJSON('scripts/hackerIpsum.json', blog.updateFromJSON);
};

blog.updateFromJSON = function(data) {
  data.forEach(function(item) {
    var article = new Article(item);
    blog.articles.push(article);

  });
  blog.initArticles();
};

var sortRawData = function() {
  blog.rawData.sort(function(a, b) {
    if(a.publishedOn > b.publishedOn) {return -1;}
    if(a.publishedOn < b.publishedOn) {return 1;}
    return 0;
  });
};
