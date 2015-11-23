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
    gapi.client.load('ges','v1',function(response) {
        // Ready to make calls!
        console.log(response);
      });
}