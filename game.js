var canvas = document.getElementById("connect4Canvas");
var ctx = canvas.getContext("2d");

//resize 
window.addEventListener('resize', function(){ resize();})

var screenWidth = 640;
var screenHeight = 480;

var ratio = screenHeight/screenWidth;

var currentWidth = screenWidth;
var currentHeight = screenHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

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

var loginComplete = false;

update();

//Main game loop
function update(){
    if (loginComplete){
        var a = new leaderboardController('CgkIw5Xv3M4GEAIQAQ');
    }
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

function resize(){
    ratio =  screenHeight / screenWidth;
    
    currentWidth = window.innerHeight;
    currentHeight = ratio * currentWidth;
    
    canvas.style.width = currentWidth + 'px';
    canvas.style.height = currentHeight + 'px';
    
    // we use a timeout here because some mobile
    // browsers don't fire if there is not
    // a short delay
    window.setTimeout(function() {window.scrollTo(0,1);}, 1);

}