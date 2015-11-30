function createGame(){
    var request = gapi.client.games.turnBasedMatches.create({
        "kind" : "games#turnBasedMatchCreateRequest",
        "variant": 0,
        "invitedPlayerIds" : [],
        "autoMatchingCriteria" :
        {
            "kind" : "games#turnBasedAutoMatchingCriteria",
            "minAutoMatchingPlayers" : 1,
            "maxAutoMatchingPlayers" : 2,
        },
        "requestID" : Math.floor(Math.random * 1000000000000)
    });
    request.execute(function(response)
    {
        console.log(response);
    }); 
    }
}

function activeGames(){
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function(response){
        console.log(response);
    });
}

function cancelGame(){
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function(response){
        var newRequest = gapi.client.games.turnBasedMatches.cancel(
            {
                "matchId" : response.items[0].matchId
            });
        
        newRequest.execute(function(response){
            console.log("Game cancelled");
        });
    });
}
