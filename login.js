function handleAuthResult(auth){
    console.log(auth);
    if (auth && auth.error == null) {
        console.log("Logged in");
        load();
    } else {
        console.log("Login failed");
        //Call popup window for login
        gapi.auth.signIn();
  }
}

function load(){
    console.log("Running load function");
    gapi.client.load('games','v1',function(response) {
        // Ready to make calls!
        if(response == null){
            loadLeaderboard();
            testScore();
        }
      });
  
   
}

function loadLeaderboard(){
 var request = gapi.client.games.leaderboards.list(
      {maxResults: 5}
    );
    request.execute(function(response) {
        console.log('Leaderboard data', response);
      // Do something interesting with the response
    });
    
}
//function loadLeaderboard(){
//    var json= { leaderboardId: 'CgkIw5Xv3M4GEAIQAQ', collection: 'PUBLIC', timeSpan:'ALL_TIME'};
//    var request = gapi.client.games.scores.listWindow(json);
//    request.execute(function(response) { 
//         console.log(response.items);
//    });
//}

function testScore(){
    console.log("new score added");
     var request = gapi.client.games.scores.submit(
        {leaderboardId: "CgkIw5Xv3M4GEAIQAQ",
        score: 11}
    );
    request.execute(function(response) {
      // Check to see if this is a new high score
    })
}