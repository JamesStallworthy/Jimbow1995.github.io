
/** Creates a game and invite the ID stored in inviteID */
function createGame() {
    player = "p_1";
    participant = "p_2";
    gamestate = "processing";

    var request = gapi.client.games.turnBasedMatches.create({
        "kind": "games#turnBasedMatchCreateRequest",
        "invitedPlayerIds": [inviteID],
        "requestID": Math.floor(Math.random * 1000000000000)
    });

    request.execute(function (response) {
        console.log("Game created");
        console.log(response);
        matchVersion = 1;
        matchID = response.matchId;
        gamestate = "takeTurn";
    });
}


function joinGame(id) {
    player = "p_2";
    participant = "p_1";
    var request = gapi.client.games.turnBasedMatches.join(
        {
            "matchId": id
        });

    request.execute(function (response) {
        console.log("Game joined");
        getData();
    });
}

function takeTurn(dataToSend) {
    gamestate = "processing";
    var request = gapi.client.games.turnBasedMatches.takeTurn(
        { "matchId": matchID },
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
    request.execute(function (response) {
        console.log("turn taken");
        gamestate = "waiting"
        console.log(response);
    });
}


function getData() {
    console.log("getting data");
    gamestate == "processing";
    recieved = false;
    var request = gapi.client.games.turnBasedMatches.get(
        {
            "matchId": matchID,
            "includeMatchData": true
        });

    request.execute(function (response) {
        console.log("Match status: ", response.userMatchStatus);
        if (response.userMatchStatus == "USER_TURN") {
            gamestate = "takeTurn";
            recieved = true;
            console.log("User took there turn");
            matchVersion = response.matchVersion;
            multiplayerPlaceCounter(atob(response.data.data));
        }
    });
}


function activeGames() {
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function (response) {
        console.log(response);
        invitedToList = response.items;
    });
}

function cancelGame(id) {
    var request = gapi.client.games.turnBasedMatches.cancel(
        {
            "matchId": id
        });

    request.execute(function (response) {
        console.log(response);
        console.log("Game cancelled");
    });
}
