//setInvite
//create
//taketurn
//waiting
//joingame
//taketurn

//Id of player to invite on creating of game
var inviteID = "107373363902631863467"
//Stores the matches ID
var matchID;
var matchVersion;

//If true waiting to check the game data
var checkTurnWait = false;

//Either "p_1" or "p_2" depending on who is player 1 or two.
var player;
var participant;

function multiplayerController(){
    if (gamestate == "createJoin"){
        MultiMenu.drawCreateJoin();
    }
    else if (gamestate == "takeTurn"){
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        Arrow.drawArrow();
        Arrow.placeCounter();
    }
    else if (gamestate == "waiting" || gamestate == "processing"){
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        checkTurn();
    }
}

function setInviteID(data){
    inviteID = data;
}

function checkTurn(){
    if(!checkTurnWait){
        checkTurnWait = true;
        setTimeout(function(){
            console.log("Checking after 10seconds");
            checkTurnWait = false;
            if (gamestate == "waiting"){
                getData(); 
            }
        },5000);
    }
    
}

function multiplayerPlaceCounter(col){
    Grid.insertCounter(col,2);
}