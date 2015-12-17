page('/',articlesController.index);

page('/category/:category',
 articlesController.category,
 articlesController.show);

page('/author/:author', articlesController.author);

page('/about', aboutController.index);

page.start();
