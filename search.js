// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    console.log(response);
    
    
    var responseString = JSON.stringify(response, '', 2);
    
    //parsing json object
    var jsonobj = JSON.parse(responseString);
    
    //collecting videoId links and placing them into an array
    var links = new Array()
    for (i = 0; i < 5; i++)
    {
        links[i] = jsonobj.items[i].id.videoId;
    }
    
    for (j = 0; j < 5; j++)
    {
        document.getElementById('response').innerHTML += jsonobj.items[j].snippet.title;
    }
    
    
    
    
    
    //document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'destiny'
        
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}
