function leaderboardController(ID){
    this.id = ID;
    this.score = new Array;
    this.names = new Array();
    this.numOfScores = 0;
    this.loadLeaderboard(ID);
}

leaderboardController.prototype.submitScore = function(score){
     var request = gapi.client.games.scores.submit(
        {leaderboardId: this.id,
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

leaderboardController.prototype.loadLeaderboard = function(){
     var json={};
    json.leaderboardId=this.id;
    json.collection='PUBLIC';
    json.timeSpan='ALL_TIME';
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) {
        
        }
    );
    console.log(score);
}