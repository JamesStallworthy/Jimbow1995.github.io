//function leaderboardController(){
//}
//
//leaderboardController.prototype.submitScore = function(id,score){
//     var request = gapi.client.games.scores.submit(
//        {leaderboardId: id,
//         timeSpan : "ALL_TIME",
//        score: score}
//    );
//    request.execute(function(response) {
//        if(response == null){
//            console.log("New score submitted");
//        }
//        else{
//            console.log("error", response);
//        } 
//    });
//}
//
//leaderboardController.prototype.loadLeaderboard = function(id){
//    leaderBoardLoading = true;
//    console.log("Loading leaderboard");
//    var json={};
//    json.leaderboardId=id;
//    json.collection='PUBLIC';
//    json.timeSpan='ALL_TIME';
//    var request = gapi.client.games.scores.listWindow(json);
//    request.execute(function(response) {
//            leaderBoardDataLoaded = true;
//            console.log("Data loaded");
//            leaderboardData = response.items;
//        }
//    );
//}

function loadLeaderboard(id, leader){
    var json={};
    json.leaderboardId=id;
    json.collection='PUBLIC';
    json.timeSpan='ALL_TIME';
    var request = gapi.client.games.scores.listWindow(json);
    request.execute(function(response) { 
            storeLeaderboard(response.items, leader);
        
        }
    );
}

function storeLeaderboard(data , leader){
    console.log(leader);
    console.log(data);
}