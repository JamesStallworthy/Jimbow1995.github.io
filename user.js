document.addEventListener("keydown", keyDownHandler, false);
//event listener for mouse down
document.addEventListener("mousedown", mouseDownHandler, false);

function keyDownHandler(e) {
		if(e.keyCode == 39) {
			Arrow.rightPressed = true; 
		}
		else if(e.keyCode == 37) {
			Arrow.leftPressed = true;
		}  
        else if(e.keyCode == 32)
        {
            Arrow.spacebarPressed =true;   
        }
        else if(e.keyCode == 67)
        {
            console.log("c pressed");
            //createGame();
        }
        else if(e.keyCode == 88){
            console.log("x pressed");
            cancelGame();
        }
        else if(e.keyCode == 76){
            console.log("l pressed");
            activeGames();
        }
    
}

//When mouse us pressed get location and pass to location check
function mouseDownHandler()
{
    mouseX=event.pageX-canvas.offsetLeft;
    mouseY=event.pageY-canvas.offsetTop;
    if(gamestate == "menu")
      Menu.clicked(mouseX, mouseY);
    if(gamestate == "winner" || gamestate=="winnerPlayer1" || gamestate=="winnerPlayer2")
      WinS.clicked(mouseX, mouseY);
    if(gamestate == "loser")
      LoseS.clicked(mouseX, mouseY);
    if(gamestate == "single")    
        Arrow.moveArrowMouse(mouseX,mouseY); 
}
