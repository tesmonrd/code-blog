sortRawData();
buildComment();
blog.truncateArticles();
$('#filterAuthor').change(sortByAuthor);
$('#filterCategory').change(sortByCategory);
