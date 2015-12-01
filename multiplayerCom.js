function createGame(){
    gamestate = "processing";
    
    //If you create game you are player 1
    player = "p_1";
    participant = "p_2";
    
    var request = gapi.client.games.turnBasedMatches.create({
        "kind" : "games#turnBasedMatchCreateRequest",
        "variant": 0,
        "invitedPlayerIds" : [inviteID],
        "requestID" : Math.floor(Math.random * 1000000000000)
    });
    
    request.execute(function(response)
    {
        matchID = response.matchId; 
        //Wait 1 second for game to create before init
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
        console.log("Game created and initialized");
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
    var request = gapi.client.games.turnBasedMatches.cancel(
    {
        "matchId" : matchID
    });
        
    request.execute(function(response){
        console.log("Game cancelled");
    });
}



function takeTurn(dataToSend){
    gamestate = "processing";
    var newRequest = gapi.client.games.turnBasedMatches.takeTurn(
        {"matchId" : matchID},
        {
            "kind": "games#turnBasedMatchTurn",
            "data":
            {
                "kind": "games#turnBasedMatchDataRequest",
                "data": btoa(dataToSend)
            },
            "pendingParticipantId": participant,
            "matchVersion": response.items[0].matchVersion,
    });
    
    newRequest.execute(function(response){
        console.log("You have taken your turn");
        gamestate = "waiting"
        console.log(response);
    });
}

function joinGame(){
    player = "p_2";
    participant = "p_1";
    
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function(response){
        var newRequest = gapi.client.games.turnBasedMatches.join(
            {
                "matchId" : response.items[0].matchId
            });
        
        newRequest.execute(function(response){
            console.log("Game joined");
            getData();
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
                console.log("User took there turn");
                gamestate = "takeTurn";
                multiplayerPlaceCounter(atob(response.data.data));
            }
            console.log("gamestate after getData: ", gamestate);
        });
    });
}