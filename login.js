/** Callback function for login, if user logged in loads the googling loading scripts, if not logged in pops login screen up */
function handleAuthResult(auth){
    console.log(auth);
    if (auth && auth.error == null) {
        console.log("Logged in");
        load();
    } else {
        console.log("Login failed");
        //Call popup window for login
        gamestate = "login";
  }
}
/** Load the Google games API and Plus API */
function load(){
    console.log("Running load function");
    gapi.client.load('games','v1',function(response) {
        // Ready to make calls!
        if(response == null){
            console.log("Games API loaded");
            googleAPILoaded = true;
            
        }
      });
   gapi.client.load('plus','v1',function(response) {
       console.log(response);
       console.log("Plus API loaded");
       var request = gapi.client.plus.people.list({"collection": "visible","userId": "me"});
       request.execute(function(response){
           console.log(response);
           usersFriends=response.items});
           var request = gapi.client.plus.people.get({"userId": "me"});
           request.execute(function(response){
           console.log(response);
        });
      });
   
      gamestate = "menu";
}