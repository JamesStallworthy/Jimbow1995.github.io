function leaderboardController(ID){
    this.id = ID;
    this.data;
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
        console.log(this.data);
    });
}