// var blog = {};
// blog.articles = [];
//
// blog.loadArticles = function () {
//   $.get('template.html', function(data, message, xhr){
//     Article.prototype.template = Handlebars.compile(data);
//     $.ajax({
//       type: 'HEAD',
//       url: '/script/hackerIpsum.json',
//       success: blog.fetchArticles
//     });
//   });
// };
//
// blog.fetchArticles = function(data,msg,xhr){
//   var eTag = xhr.getResponseHeader('eTag');
//   if(typeof localStorage.articlesEtag == 'undefined' || localStorage.articlesEtag != eTag){
//     localStorage.articlesEtag = eTag;
//     blog.articles = [];
//     webDB.execute('DELETE FROM articles;', blog.fetchJSON);
//   } else {
//     blog.fetchFromDB();
//   };
// };
//
// blog.fetchJSON = function() {
//   $.getJSON('/script/hackerIpsum.json', blog.updateFromJSON);
// };
//
// blog.updateFromJSON = function(data) {
//   data.forEach(function(item) {
//     var article = new Article(item);
//     blog.articles.push(article);
//     article.insertRecord();
//   });
// };
//
// blog.fetchFromDB = function(callback) {
//   callback = callback || function () {};
//   webDB.execute(
//     'SELECT * FROM articles ORDER BY publishedOn DESC;',
//     function (resultArray) {
//       resultArray.forEach(function(ele) {
//         blog.articles.push(new Article(ele));
//       });
//       blog.render();
//       callback;
//     }
//   );
// };
//
// blog.render = function() {
//   blog.articles.forEach(function(article) {
//     article.appendToDom();
//   });
//   webDB.execute(
//     'SELECT * FROM articles;',
//     function (results) {
//       results.forEach(function(ele) {
//       });
//     });
//   $('pre code').each(function(i, block) {
//     hljs.highlightBlock(block);
//   });
//   Article.tagsDropDown();
// };
