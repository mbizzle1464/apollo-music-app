  $(document).ready(function () {

      var musicKey;
      var newsKey;

      $.get('/getkeys').then(function (keys) {
          musicKey = keys.music
          newsKey = keys.news
          //console.log(keys);
          //console.log(musicKey);
          //console.log(newsKey);

          var blogContainer = $("#blog-container");
          var authorId;
          var postBody;

          $.get("/api/posts", {
              order: [
                  ['createdAt', 'DESC']
              ]
          }).then(function (postResponse) {
             // console.log(postResponse);
              for (var i = 0; i < postResponse.length; i++) {
                  var formattedDate = new Date(postResponse[i].createdAt);
                  formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
                 // console.log(formattedDate);
                  var panelGroup = $('<div class="panel-group blog-results">');
                  var panelDefault = $('<div class="panel panel-default">');
                  var panelHeading = $('<div class="panel-heading authorName">');
                  var panelTitle = $('<div class="panel-title authorUserName">');
                  var newDiv = $('<div class = "date">');
                  var panelbody = $('<div class="panel-body post">');

                  var user = postResponse[i].Author.firstname + postResponse[i].Author.lastname;
                  var username = postResponse[i].Author.username;
                  var body = postResponse[i].body

                  blogContainer.append(panelGroup);
                  panelGroup.append(panelDefault);
                  panelDefault.append(panelHeading);
                  panelHeading.append("<h2>" + user + "</h2>");
                  panelHeading.append(panelTitle);
                  panelTitle.append("<a href='/cms/" + postResponse[i].Author.id + "'> @" + username)
                  panelTitle.append(panelbody);
                  panelbody.text('" ' + body + ' "');
                  panelbody.append(newDiv);
                  newDiv.append("<p>" + formattedDate + "</p>");
              }
          });


          var newsURL = 'https://newsapi.org/v2/top-headlines?sources=mtv-news'+newsKey;      
          var newsContainer = $('#newsSearch')
          $.ajax({
              url: newsURL,
              method: "GET"
          }).then(function (newsResponse) {
             // console.log(newsResponse);

              var articles = newsResponse.articles;
              newsContainer.append($('<h3 class="display-3">').text("Recent Articles"));
              for (var i = 0; i < articles.length; i++) {
                  var formattedDate = new Date(articles[i].publishedAt);
                  formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
                  var buttonGroup = $('<div aria-label="News Articles">');
                  var panelGroup = $('<div class="panel-group news-results">');
                  var panelDefault = $('<div class="panel panel-default">');
                  var panelHeading = $('<div class="panel-heading">');
                  var panelTitle = $('<div class="panel-title">');
                  var panelbody = $('<div class="panel-body">');
                  var newDiv = $('<div class = "articles">');
                  var articleLink = $('<a class="btn btn-lg btn-danger news-button" role="button">');

                  var newsArticle = articles[i].title;
                  var newsArticleURL = articles[i].url;
                  var newsAuthor = articles[i].author;
                  var source = articles[i].source.name;
                 // console.log(newsArticle);

                  newsContainer.append(panelGroup);
                  panelGroup.append(panelDefault);
                  panelDefault.append(panelHeading);
                  panelHeading.append("<h2> Headline: " + newsArticle + "</h2>");
                  panelTitle.append(newsArticle);
                  panelHeading.append(panelbody);
                  panelbody.append("<h4> Written By: " + newsAuthor + "</h4>");
                  panelbody.append("<h4> Source: " + source + "</h4>");
                  panelbody.append(newDiv);
                  newDiv.append("<h4> Released: " + formattedDate + "</h4>");
                  newDiv.append(buttonGroup);
                  articleLink.attr("href", newsArticleURL);
                  articleLink.attr("target", "_blank");
                  articleLink.text("Click here for story");
                  buttonGroup.append(articleLink);
              }
          })

      });
  });