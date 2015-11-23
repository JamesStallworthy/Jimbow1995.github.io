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
        if(response == null)
            console.log("Everything is good so far....");
      });
     var request = gapi.client.games.scores.submit(
        {leaderboardId: "CgkIw5Xv3M4GEAIQAQ",
        score: 10}
    );
    request.execute(function(response) {
      // Check to see if this is a new high score
    })
}