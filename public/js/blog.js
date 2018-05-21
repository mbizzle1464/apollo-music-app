$(document).ready(function () {

  var blogContainer = $(".blog-container");
  var authorList = $("tbody");
  var url = window.location.search;
  var authorId;

  if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
    getPosts(authorId);
  }
  else {
    getPosts();
  }

  function getPosts(author) {
    authorId = author || "";
    if (authorId) {
      authorId = "/?author_id=" + authorId;
    }
    $.get("/api/posts" + authorId, function (data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty(author);
      } else {
        initializeRows();
      }
    });
  }

  function initializeRows() {
    blogContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    renderPosts(postsToAdd);
  }

  function renderPosts(rows) {
    authorList.children().not(":last").remove();
    blogContainer.children(".alert").remove();
    console.log(rows);
    authorList.prepend(rows);
  }

  function createNewRow(post) {
    console.log(post);
    var newTr = $("<tr>");
    newTr.addClass("Entries");
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var authorName;
    authorName = post.Author.firstname + " " + post.Author.lastname;

    newTr.data("author", post);
    newTr.append("<tr><th class='authorName'>" + authorName + "</th></tr>");
    newTr.append("<tr><td class='authorUserName'><a href='/cms/" + post.AuthorId + "'> @" + post.Author.username + "</a></td></tr>");
    newTr.append("<tr><td class='post'>" + post.body + "</td></tr>");
    newTr.append("<tr><td class='date'>" + formattedDate + "</td></tr>");
    newTr.append("<hr>");
    return newTr;
  }

  function displayEmpty(id) {
    var query = window.location.search;
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({
      "text-align": "center",
      "margin-top": "50px"
    });
    messageh2.html("No posts yet, please navigate to the post page in order to get started.");
    blogContainer.append(messageh2);
  }
});


