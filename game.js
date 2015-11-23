var canvas = document.getElementById("connect4Canvas");
var ctx = canvas.getContext("2d");

//Init objects
var Grid = new grid();
var Counter = new counters();
var Arrow = new arrow();
var Menu = new menu();
var Check = new checkScript();
var WinS = new winScreen();
var LoseS = new loseScreen();

//determines what state the user is in
var gamestate="menu";

update();

//Main game loop
function update(){
    
    //every frame clear the whole canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gamestate=="menu"){
         Menu.drawMenu();
    }
    if(gamestate == "single"){
        Grid.drawGrid();
        Grid.drawCountersToGrid();
        Arrow.drawArrow();
        Arrow.placeCounter();
    }
    if(gamestate == "winner"){
      WinS.drawImg();
    }
    if(gamestate == "loser"){
      LoseS.drawImg();
    }
    if(gamestate == "winnerPlayer1"){
        WinS.drawImgWin1();
        //Player 1 win screen
    }
    if (gamestate == "winnerPlayer2"){
        WinS.drawImgWin2();
        //Player 2 win screen
    }
    if(gamestate == "quit"){
      //QUIT code
    }
    //Calls the update function again
    requestAnimationFrame(update);
}

function reset(){
    Grid.clearArray();
    Arrow.resetArrow();
}