
        console.clear()

        let API_KEY = "AIzaSyC8KHyCCzdotzrD-mQL-ZsTAlb9MlTuukY"
        let trailer_search = "The Martian Official Trailer #1 Latest 2015"
        videoSearch(API_KEY, trailer_search, 1)


        function videoSearch(key, search, maxResults)
        {
            $("#trailer").empty()

            $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + trailer_search, function (data)
            {

                data.items.forEach(item => 
                {
                    trailers = `<iframe class="youtube-player" style="width: 30%; height: 260px;" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`
                    $("#trailer").append(trailers)
                })

            })


        }


