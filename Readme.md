Article Management App

- This app have all security bundle installed for user authorization purpose.
- Routes.yaml is handling path on the basis of annotation provided in ArticleController.
- SecurityController.php check for the user authentication, if it gets success it redirect it 
  to Route Name - app_article_index.
- ArticleController.php have a index route name as app_article_index, this will list all 
  the articles.
- ArticleController.php have all the given routes in annotation itself.
- Given methods in ArticleController.php are - 
  - index
  - new
  - show
  - edit
  - delete
- Each of the methods have their own twig files which is present inside templates ---> article folder.
- base.html.twig is included in edit.html.twig, as ajax(article.js) is implemented for rendering 
  of updated data.

Project Setup ----
 - .env contains the db configuration.
 - composer update.