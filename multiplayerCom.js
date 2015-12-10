/**
 * @fileOverview Handles communication with google multiplayer servers
 * @name multiplayerCom.js
 */

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


/** Joins game with the matchID passed to it
 * @param {integer} id MatchId
 */
function joinGame(id) {
    player = "p_2";
    participant = "p_1";
    matchID = id;
    var request = gapi.client.games.turnBasedMatches.join(
        {
            "matchId": id
        });

    request.execute(function (response) {
        console.log("Game joined");
        getData();
    });
}

/** Takes the users turn. The data sent is passed as the argument. 
 * @param {integer} dataToSend Data you want to send
 */
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

/** Recieves data from the server. Either retrieves the other uses data or if current user is waiting. */
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
            console.log("User took there turn");
            matchVersion = response.matchVersion;
            multiplayerPlaceCounter(atob(response.data.data));
        }
        recieved = true;
    });
}

/** Lists all the activeGames the user can join */
function activeGames() {
    var request = gapi.client.games.turnBasedMatches.list();
    request.execute(function (response) {
        invitedToList = new Array();
        var z = 0;
        for (var i = 0; i < response.items.length; i++) {
            if (response.items[i].userMatchStatus == "USER_INVITED") {
                invitedToList[z] = response.items[i];
                z++;
            }
        }

    });
}

/** Cancel the game with the matchId supplied
 * @param {integer} id MatchId
 */
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
