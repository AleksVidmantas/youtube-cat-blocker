var ourRequest = new XMLHttpRequest();
var catMap = new Map();
var urlRX = /(v=)(...........)/ //this is the regex that finds the v=etc code

//necessary
catMap.set("1", "Film & Animation");
catMap.set("10", "Music");
catMap.set("15", "Pets & Animals");
catMap.set("17", "Sports")
catMap.set("18", "Short Movies");
catMap.set("19", "Travel & Events");
catMap.set("20", "Gaming");
catMap.set("21", "Videoblogging");
catMap.set("22", "People and Blogs");
catMap.set("23", "Comdey");
catMap.set("24", "Entertainment");
catMap.set("25", "News & Politics");
catMap.set("26", "Howto & Style");
catMap.set("27", "Education");
catMap.set("28", "Science & Technology");
catMap.set("29", "Nonprofits & Activism");
catMap.set("30", "Movies");
catMap.set("31", "Anime/Animation");
catMap.set("32", "Action/Adventure");
catMap.set("33", "Classics");
catMap.set("34", "Comedy");
catMap.set("35", "Documentary");
catMap.set("36", "Drama");
catMap.set("37", "Family");
catMap.set("38", "Foreign");
catMap.set("39", "Horror");
catMap.set("40", "Sci-Fi/Fantasy");
catMap.set("41", "Thriller");
catMap.set("42", "Shorts");
catMap.set("43", "Shows");
catMap.set("44", "Trailers");

function getID(){
    var url = document.getElementById("youtubeURL").value;
    
    console.log("Passing " + url);
    var urlKey = urlRX.exec(url)[2];//group that matches the urlKey for ourRequests.open()
    console.log("KEY: " + urlKey);

    ourRequest.open('GET', 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + urlKey + '&key=AIzaSyC59K1CO0RwZ-WsANfM4H8bqIXRtFdPcEI');

    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        var catID = ourData['items'][0]['snippet']['categoryId'];
        cat = catMap.get(catID); //uses map to get category
        console.log(cat);
        document.getElementById("category").textContent = "Category: " + cat;
    
    
    };
    ourRequest.send();
    
}

