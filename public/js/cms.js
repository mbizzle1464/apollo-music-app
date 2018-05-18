$(document).ready(function () {
  var bodyInput = $("#body");
  var cmsForm = $("#cms");
  $(cmsForm).on("submit", handleFormSubmit);
  var url = window.location.search;
  var postId;
  var authorId;
  var updating = false;

  
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId, "post");
  } else if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
  }

  function handleFormSubmit(event) {
    $.get("/api/authors", function (data) {
      for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);  
        authorId = data[i].id;
        console.log(authorId);
      }
    });
    event.preventDefault();
    if (!bodyInput.val().trim()) {
      return;
    }
    var newPost = {
      body: bodyInput
        .val()
        .trim(),
      AuthorId: authorId
    };
    console.log(newPost);

    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  }

  function submitPost(post) {
    $.post("/api/posts", post, function () {
      window.location.href = "/dashboard";
    });
  }

  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
      case "post":
        queryUrl = "/api/posts/" + id;
        break;
      case "author":
        queryUrl = "/api/authors/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function (data) {
      console.log(data);
      if (data) {
        console.log(data.AuthorId || data.id)
        bodyInput.val(data.body);
        authorId = data.AuthorId || data.id;
        updating = true;
      }
    });
  }

  function updatePost(post) {
    $.ajax({
        method: "PUT",
        url: "/api/posts",
        data: post
      })
      .then(function () {
        window.location.href = "/dashboard";
      });
  }

  function getAuthor(author) {
    authorId = author || "";
    if (authorId) {
      authorId = "/?author_id=" + authorId;
    }
    $.get("/api/cms" + authorId, function (data) {
      console.log(data);
    });
  }

  function upsertAuthor(authorData) {
    console.log(authorData)
    $.post("/api/authors", authorData)
      .then(getAuthors);
  }


});
