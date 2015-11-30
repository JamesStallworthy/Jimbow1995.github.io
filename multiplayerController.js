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
    else if (gamestate == "init"){
        console.log("initing game")
        initGame();
    }
    else if (gamestate == "takeTurn"){
        
    }
    else if (gamestate == "waiting"){
        getData();
    }
}

function setGameState(gstate){
    gamestate = gstate;
}