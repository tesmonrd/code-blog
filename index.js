sortRawData();
buildComment();
blog.truncateArticles();
$('#template').remove();
$('#filterAuthor').change(sortByAuthor);
$('#filterCategory').change(sortByCategory);
