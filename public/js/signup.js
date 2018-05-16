
        var displayContent = function () {
    
            var favoriteGenres = ["genreRock", "genrePunk", "genrePunkPop", "genreCountry", "genreRap", "genreRNB", "genreKPop"];
            var favoriteDecades = ["decadeFifties", "decadeSixties", "decadeSeventies", "decadeEighties", "decadeNineties", "decadeNoughties"];
            var listenStyle = ["listenRadio", "listenSatelitte", "listenCassette", "listenEightTrack", "listenCompactDisc", "listenOnline", "listenRecord"];
    
            var j = 0;
    
            var genres = "<h3 class='filter-heading'>Favorite Genres</h3>";
            genres += "<ul class='filter-list'>";
            for(var i=0; i < favoriteGenres.length; i++) {
                genres += "<li><div class='checkbox'><label>";
                genres += "<input type='checkbox' name='genre" + favoriteGenres[i] + "'>";
                genres += "<span class='checkbox-material'><span class='check'></span></span>";
                genres += favoriteGenres[i];
                genres += "</label></div></li>";
                j++;
            };
            genres += "</ul>";
            $("#frontend_skills").html(genres);
    
            var decade = "<h3 class='filter-heading'>Favorite Decade of Music</h3>";
            decade += "<ul class='filter-list'>";
            for(var i=0; i < favoriteDecades.length; i++) {
                decade += "<li><div class='checkbox'><label>";
                decade += "<input type='checkbox' name='decade" + favoriteDecades[i] + "'>";
                decade += "<span class='checkbox-material'><span class='check'></span></span>";
                decade += favoriteDecades[i];
                decade += "</label></div></li>";
                j++;
            };
            decade += "</ul>";
            $("#backend_skills").html(decade);
    
            var listen = "<h3 class='filter-heading'>Preferred Way to Listen to Music</h3>";
            listen += "<ul class='filter-list'>";
            for(var i=0; i < listenStyle.length; i++) {
                listen += "<li><div class='checkbox'><label>";
                listen += "<input type='checkbox' name='listen" + listenStyle[i] + "'>";
                listen += "<span class='checkbox-material'><span class='check'></span></span>";
                listen += listenStyle[i];
                listen += "</label></div></li>";
                j++;
            };
            listen += "</ul>";
            $("#design_skills").html(listen);
    
        };
    
        $(".search-button").on('click', function () {
    
            displayContent();
    
        });
    

    
    