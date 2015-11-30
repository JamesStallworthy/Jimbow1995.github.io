function leaderboardController(){
}

leaderboardController.prototype.submitScore = function(id,score){
     var request = gapi.client.games.scores.submit(
        {leaderboardId: id,
         timeSpan : "ALL_TIME",
        score: score}
    );
    request.execute(function(response) {
        if(response == null){
            console.log("New score submitted");
        }
        else{
            console.log("error", response);
        } 
    });
}

leaderboardController.prototype.loadLeaderboard = function(id){
    var json={};
    json.leaderboardId=id;
    json.collection='PUBLIC';
    json.timeSpan='ALL_TIME';
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) {

        }
    );
}