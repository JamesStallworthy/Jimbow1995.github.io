//setInvite
//create
//init
//taketurn
//join
var inviteID = "107373363902631863467"

function multiplayerController(){
    if (gamestate == "setInvite"){
    
    }
    else if (gamestate == "create"){
        console.log("create game");
        createGame();
    }
    else if (gamestate == "takeTurn"){
        Grid.drawGrid();
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