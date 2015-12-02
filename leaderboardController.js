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
    leaderboardDataLoaded = false;
    leaderboardDataLoading = true;
    var json={};
    json.leaderboardId=id;
    json.collection=collection;
    json.timeSpan=timeSpan;
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) { 
            console.log("Leaderboard loaded, Data: ", response.items);
            leaderboardData = response.items;
            leaderboardDataLoaded = true;
            leaderboardDataLoading = false;
        }
    );
}
