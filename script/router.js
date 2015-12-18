page('/',
  articlesController.template,
  articlesController.index
);

page('/category/:category',
  articlesController.template,
  articlesController.category,
  articlesController.show
);
page('/author/:author',
  articlesController.template,
  articlesController.author,
  articlesController.show
);

page('/about', aboutController.index);

page.start();
