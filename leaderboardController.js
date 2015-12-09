function submitScore(id, score){
     var request = gapi.client.games.scores.submit(
        {leaderboardId: id,
         timeSpan : "ALL_TIME",
        score: score}
    );
    request.execute(function(response) {
        if(response != null){
            console.log("New score submitted");
        }
        else{
            console.log("error", response);
        } 
    });
}

function loadLeaderboard(id,timeSpan,collection){
    console.log("loading leaderboard: ", id);
    var json={};
    json.leaderboardId=id;
    json.collection=collection;
    json.timeSpan=timeSpan;
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) {
            console.log(response);
            console.log("Leaderboard loaded, Data: ", response.items);
            leaderboardData = response.items;
        }
    );
    var request = gapi.client.games.scores.get(json);
    request.execute(function(response) {
            console.log(response);
        }
    );
}
