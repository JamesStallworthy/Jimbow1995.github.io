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
         var request = gapi.client.games.leaderboards.list(
      {maxResults: 5}
    );
    request.execute(function(response) {
        console.log('Leaderboard data', response);
      // Do something interesting with the response
    });
      });
  
   
}