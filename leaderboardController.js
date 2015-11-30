function leaderboardController(ID){
    this.id = ID;
    this.score = new Array(10);
    this.names = new Array(10);
    this.numOfScores;
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
        this.numOfScores = response.items.length;
        for (var i = 0; i < response.items.length; i++){
            this.score[0] = response.items[0].formattedScore;
        }
        console.log('score', this.score);
        
        console.log(response.items[0].formattedScore);
    });
}