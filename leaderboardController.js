function leaderboardController(id){
    this.id = id;
    this.data;
    this.loadLeaderboard(id);
}

leaderboardController.prototype.submitScore = function(score){
   
}

leaderboardController.prototype.loadLeaderboard = function(id){
     var json={};
    json.leaderboardId=this.id;
    json.collection='PUBLIC';
    json.timeSpan='ALL_TIME';
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) {
        console.log('Leaderboard data for', this.id , response);
        this.data = response;
        console.log(this.data);
    });
}