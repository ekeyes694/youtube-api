$(document).ready(function () {
    $('.results').hide();

    function getResults(query) {

        $.getJSON("https://www.googleapis.com/youtube/v3/search", {
                "part": "snippet",
                "key": "AIzaSyCqHCrZLj3LI2_yiUqzi2QT9hcHF2jDjhc",
                "q": query
            },
            function (data) {

                if (data.pageInfo.totalResuts == 0) {
                    alert("No videos found!");
                }
                displaySearchResults(data.items);
            }
        );
    }

    function displaySearchResults(videos) {

        var html = "";
        $('.results').show();
        $.each(videos, function (index, video) {
            console.log(video.id.videoId);
            html = html + "<li><p>" + video.snippet.title + "<p><a href='https://www.youtube.com/watch?v=" + video.id.videoId + "' target='_blank'><img src='" + video.snippet.thumbnails.high.url + "'/></a></li>";

        });
        $("#search-results ul").html(html);
    }
    $("#search-form").submit(function (event) {
        event.preventDefault();
        getResults($("#query").val());
    });


});

//AIzaSyCqHCrZLj3LI2_yiUqzi2QT9hcHF2jDjhc
