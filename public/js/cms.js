$(document).ready(function () {

  $('#SubmitPost').on('click', function (event) {
    event.preventDefault();
    var AuthorId = $('#AuthorId').val();
    var postBody = $('#PostBody').val();

    $.post('/api/posts', {
      AuthorId: AuthorId,
      body: postBody
    }).done(function (response) {
      window.location.href = "/dashboard";
    });
  })

  
});

