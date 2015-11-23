function handleAuthResult(auth){
    console.log(auth);
    if (auth && auth.error == null) {
        console.log("Logged in");
    } else {
        console.log("Login failed");
        //Call popup window for login
        gapi.auth.signIn();
        load();
  }
}

function load(){
    gapi.client.load('games','v1',function(response) {
        // Ready to make calls!
      });
     var request = gapi.client.games.leaderboards.list(
      {maxResults: 5}
    );
    request.execute(function(response) {
      // Do something interesting with the response
        console.log(response);
    });
}