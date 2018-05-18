$(document).ready(function () {
  var authorList = $("tbody");
  var authorContainer = $(".author-container");

  getAuthors();

  function upsertAuthor(authorData) {
    $.post("/api/authors", authorData)
      .then(getAuthors);
  }

  function createAuthorRow(authorData) {
    console.log(authorData);
    var newTr = $("<tr>");
    newTr.data("author", authorData);
    newTr.append("<td class='authorName'>" + authorData.firstname + " " + authorData.lastname + "</td>");
    newTr.append("<td class='authorUserName'> " + authorData.username + "</td>");
    newTr.append("<td class='authorID'><a href='/cms?author_id=" + authorData.id + "'>Profile</a></td>");
    return newTr;
  }

  function getAuthors() {
    $.get("/api/authors", function (data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
    });
  }

  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("No Friends to view.");
    authorContainer.append(alertDiv);
  }


});