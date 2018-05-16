$(document).ready(function() {
  /* global moment */

  // blogContainer holds all of our posts
  var blogContainer = $(".blog-container");
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);

   // The code below handles the case where we want to get blog posts for a specific user
   // Looks for a query param in the url for user_id
   var url = window.location.search;
   var authorId;
   if (url.indexOf("?author_id=") !== -1) {
     authorId = url.split("=")[1];
     getPosts(authorId);
   }
   // If there's no userId we just get all posts as usual
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

    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
      blogContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
      }
      blogContainer.append(postsToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(post) {
      var formattedDate = new Date(post.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      var newPostCard = $("<div>");
      newPostCard.addClass("card");
      var newPostCardHeading = $("<div>");
      newPostCardHeading.addClass("panel-heading");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-info");
      var newPostTitle = $("<h3>");
      var newPostDate = $("<h5>");
      var newPostAuthor = $("<h2>");
      newPostAuthor.text(post.Author.firstname);
      newPostAuthor.css({
        float: "left",
        color: "blue",
        "margin-top": "-10px"
      });
      var newPostCardBody = $("<div>");
      newPostCardBody.addClass("panel-body");
      var newPostBody = $("<p>");
      newPostTitle.text(post.title + " ");
      newPostBody.text(post.body);
      newPostDate.text(formattedDate);
      newPostCardHeading.append(newPostAuthor);
      newPostTitle.append(newPostDate);
      //newPostCardHeading.append(deleteBtn);
      //newPostCardHeading.append(editBtn);
      newPostCardHeading.append(newPostTitle);
      newPostCardBody.append(newPostBody);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      newPostCard.data("post", post);
      return newPostCard;
    }

  // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
    .then(function() {
      alert('post deleted!');
      $(`[data-post=${id}]`).remove();
    });
  }

  // This function figures out which post we want to delete and then calls deletePost
  function handlePostDelete() {
    var id = $(this)
      .closest('[data-post]')
      .attr("data-post");
    deletePost(id);
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handlePostEdit() {
    var id = $(this)
      .closest('[data-post]')
      .attr("data-post");
    window.location.href = "/cms?post_id=" + id;
  }

  // This function displays a messgae when there are no posts
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Author #" + id;
    }
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    blogContainer.append(messageh2);
  }

});
