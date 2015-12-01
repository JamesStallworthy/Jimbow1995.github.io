function createGame(){
    player = "p_1";
    participant = "p_2";
    gamestate = "processing";
    var request = gapi.client.games.turnBasedMatches.create({
        "kind" : "games#turnBasedMatchCreateRequest",
        "variant": 0,
        "invitedPlayerIds" : [inviteID],
        "requestID" : Math.floor(Math.random * 1000000000000)
    });
    request.execute(function(response)
    {
        console.log("Game created");
        console.log(response);
        matchID = response.matchId;
        setTimeout(function(){initGame();},1000);
    }); 
}

function initGame(){
    var request = gapi.client.games.turnBasedMatches.takeTurn(
       {"matchId" : matchID},
       {
        "kind": "games#turnBasedMatchTurn",
        "data":
        {
            "kind": "games#turnBasedMatchDataRequest",
            "data": btoa("initData")
        },
        "pendingParticipantId": "p_1",
        "matchVersion": 1,
    });
    request.execute(function(response){
        matchVersion = 2;
        console.log("game inited");
        gamestate = "takeTurn";
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
            console.log(response);
            console.log("Game cancelled");
        });
    });
}

function takeTurn(dataToSend){
    gamestate = "processing";
    var request = gapi.client.games.turnBasedMatches.takeTurn(
        {"matchId" : matchID},
        {
            "kind": "games#turnBasedMatchTurn",
            "data":
            {
                "kind": "games#turnBasedMatchDataRequest",
                "data": btoa(dataToSend)
            },
            "pendingParticipantId": participant,
            "matchVersion": matchVersion,
        });
    request.execute(function(response){
        console.log("turn taken");
        gamestate = "waiting"
        console.log(response);
    });
}

function joinGame(){
    player = "p_2";
    participant = "p_1";
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function(response){
        matchID = response.items[0].matchId;
        var newRequest = gapi.client.games.turnBasedMatches.join(
            {
                "matchId" : response.items[0].matchId
            });
        
        newRequest.execute(function(response){
            console.log("Game joined");
        });
    });
}

function getData(){
    gamestate == "processing";
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function(response){
        var newRequest = gapi.client.games.turnBasedMatches.get(
            {
                "matchId" : response.items[0].matchId,
                "includeMatchData" : true
            });
        
        newRequest.execute(function(response){
            console.log("Match data: ", response.userMatchStatus);
            if (response.userMatchStatus == "USER_TURN"){
                matchVersion = response.matchVersion;
                console.log("User took there turn");
                gamestate = "takeTurn";
                console.log(Grid.grid);
                multiplayerPlaceCounter(atob(response.data.data));
            }
            console.log("gamestate after getData: ", gamestate);
            console.log(atob(response.data.data));
        });
    });
}
