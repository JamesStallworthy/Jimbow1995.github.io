//setInvite
//create
//init
//taketurn
//waiting
//recived
//taketurn
var inviteID = "107373363902631863467"

function multiplayerController(){
    if (gamestate == "setInvite"){
    
    }
    else if (gamestate == "create"){
        console.log("create game");
        createGame();
    }
    else if (gamestate == "takeTurn"){
        console.log(Grid.grid);
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        Arrow.drawArrow();
        Arrow.placeCounter();
        console.log("Take your turn");
    }
    else if (gamestate == "waiting"){
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