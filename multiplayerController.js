/**
 * @fileOverview Controls multiple aspects of the multiplayer, including the menu and calling the communication functions
 * @name multiplayerController.js
 */

//Id of player to invite on creating of game
var inviteID = ""

//Stores the matches ID
var matchID;
var matchVersion;

//If true waiting to check the game data
var checkTurnWait = false;

var checkInviteList = false;

//Check to see if data has been retrived before calling again
var recieved = true;

//Either "p_1" or "p_2" depending on who is player 1 or two.
var player;
var participant;

var invitedToList = new Array();

/** Extension of the update function to control the multiplayer related game states */
function multiplayerController() {
    if (gamestate == "createJoin") {
        MultiMenu.drawCreateJoin();
    }

    if (gamestate == "invite") {
        MultiMenu.drawInviteList();
    }
    if (gamestate == "gameList") {
        MultiMenu.drawGameList();
        checkGameList();
    }
    else if (gamestate == "takeTurn") {
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        Arrow.drawArrow();
        Arrow.placeCounter();
    }
    else if (gamestate == "waiting") {
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        checkTurn();
    }
}

/** Used to update the ID of the player you want to invite */
function setInviteID(data) {
    inviteID = data;
}

/** Timer to check the status of the game. Calls getData() */
function checkTurn() {
    if (!checkTurnWait) {
        checkTurnWait = true;
        setTimeout(function () {
            console.log("Checking after 10seconds");
            checkTurnWait = false;
            if (gamestate == "waiting" && recieved) {
                getData();
            }
        }, 5000);
    }
}

/** Timer to update the invite list */
function checkGameList() {
    if (!checkInviteList) {
        checkInviteList = true;
        setTimeout(function () {
            console.log("Checking after 5 seconds");
            checkInviteList = false;
            if (gamestate == "gameList") {
                activeGames();
            }
        }, 5000);
    }
}

/** Used to place the other users counter into the current grid
 * @param {integer} col Column number
 */
function multiplayerPlaceCounter(col) {
    Grid.insertCounter(col, 2);
}