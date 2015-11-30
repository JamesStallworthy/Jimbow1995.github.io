function createGame(){
    var request = gapi.client.games.turnBasedMatches.create({
        "kind" : "games#turnBasedMatchCreateRequest",
        "variant": 0,
        "invitedPlayerIds" : ["107373363902631863467"],
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

function initGame(){
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function(response){
       var newRequest = gapi.client.games.turnBasedMatches.takeTurn(
       {"matchId" : response.items[0].matchId},
       {
           "kind": "games#turnBasedMatchTurn",
           "data":
           {
                "kind": "games#turnBasedMatchDataRequest",
                "data": btoa("111")
           },
           "pendingParticipantId": "p_1",
           "matchVersion": 1,
       });
        newRequest.execute(function(response){
            console.log(response);
        });
    });
}

function takeTurn(){
    var request = gapi.client.games.turnBasedMatches.list();
    
    request.execute(function(response){
        
        var nextPlayer = "p_2";

        if (response.items[0].pendingParticipantId == "p_2"){
            nextPlayer = "p_1";
        }
        
        var newRequest = gapi.client.games.turnBasedMatches.takeTurn(
           {"matchId" : response.items[0].matchId},
           {
               "kind": "games#turnBasedMatchTurn",
               "data":
               {
                    "kind": "games#turnBasedMatchDataRequest",
                    "data": btoa("111")
               },
               "pendingParticipantId": nextPlayer,
               "matchVersion": response.items[0].matchVersion,
           });
            newRequest.execute(function(response){
                console.log(response);
        });
    });
}

function joinGame(){
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function(response){
        var newRequest = gapi.client.games.turnBasedMatches.join(
            {
                "matchId" : response.items[0].matchId
            });
        
        newRequest.execute(function(response){
            console.log("Game joined");
        });
    });
}
