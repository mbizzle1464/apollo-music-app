$(document).ready(function () {
  var musicKey;
  var newsKey;

  $.get('/getkeys').then(function (keys) {
    musicKey = keys.music
    newsKey = keys.news
    //console.log(keys);
    //console.log(musicKey);
    //console.log(newsKey);


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

    $('#submitBtn').on('click', function () {
      var musicBase = 'http://ws.audioscrobbler.com/2.0/';
      var method = '?method=artist.search&artist=';
      var query = $('#search-input').val();
      var apiKey = musicKey;
      var musicURL = musicBase + method + query + apiKey
      //console.log(musicURL);  
      $.ajax({
        url: musicURL,
        method: "GET"
      }).then(function (musicResponse) {
        //console.log(musicResponse);
        //console.log(musicResponse.results.artistmatches.artist[0]);
        //console.log(musicResponse.results.artistmatches.artist[0].image[2]);
        //console.log("https://musicbrainz.org/artist/" + musicResponse.results.artistmatches.artist[0].mbid);
        //console.log(musicResponse.results.artistmatches.artist[0].name);
        //console.log(musicResponse.results.artistmatches.artist[0].url);

        var image = musicResponse.results.artistmatches.artist[0].image[2];
        var mbid = "https://musicbrainz.org/artist/" + musicResponse.results.artistmatches.artist[0].mbid;
        var artist = musicResponse.results.artistmatches.artist[0].name;
        var artistURL = musicResponse.results.artistmatches.artist[0].url;


        var musicContainer = $('#musicSearch');
        var panelGroup = $('<div class="panel-group music-results">');
        var panelDefault = $('<div class="panel panel-default">');
        var panelHeading = $('<div class="panel-heading">');
        var panelTitle = $('<div class="panel-title">');
        var newDiv = $('<div class = "">');
        var panelbody = $('<div class="panel-title">');

        musicContainer.append(panelGroup);
        panelGroup.append(panelDefault);
        panelDefault.append(panelHeading);
        panelHeading.append("<h2>" + artist + "</h2>");
        panelHeading.append(panelTitle);
        panelTitle.append("<a href='" + mbid + "' target='_blank'>Click here for Music Brainz Profile </a>")
        panelTitle.append(panelbody);
        panelbody.append("<a href='" + artistURL + "' target='_blank'>Click here for Last.FM Profile </a>");
      })
    })

  });
});