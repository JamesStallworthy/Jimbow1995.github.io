function leaderboardController(ID){
    this.id = ID;
    this.data;
    this.numOfScores;
    this.loadLeaderboard(ID);
}

leaderboardController.prototype.submitScore = function(score){
    
}

leaderboardController.prototype.loadLeaderboard = function(){
     var json={};
    json.leaderboardId=this.id;
    json.collection='PUBLIC';
    json.timeSpan='ALL_TIME';
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) {
        this.data = response.items;
        this.numOfScores = this.data.length;
        console.log(this.numOfScores);
        console.log(this.data);
    });
}