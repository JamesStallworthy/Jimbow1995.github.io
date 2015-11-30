function leaderboardController(ID){
    this.id = ID;
    this.data;
    this.loadLeaderboard(ID);
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
        console.log(this.id)
        console.log('Leaderboard data for' , response);
        this.data = response;
        console.log(this.data);
    });
}