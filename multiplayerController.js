//setInvite
//create
//init
//taketurn
//waiting
//recived
//taketurn

//Id of player to invite on creating of game
var inviteID = "107373363902631863467"
//Stores the matches ID
var matchID;

//Either "p_1" or "p_2" depending on who is player 1 or two.
var player;
var participant;

function multiplayerController(){
    if (gamestate == "setInvite"){
    
    }
    else if (gamestate == "create"){
        console.log("create game");
        createGame();
    }
    else if (gamestate == "takeTurn"){
        
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        Arrow.drawArrow();
        Arrow.placeCounter();
        console.log("Take your turn");
    }
    else if (gamestate == "waiting"){
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        console.log("waiting");
        //getData();
    }
}

function setGameState(gstate){
    gamestate = gstate;
}
function setInviteID(data){
    inviteID = data;
}

function multiplayerPlaceCounter(col){
    Grid.insertCounter(col,2);
}