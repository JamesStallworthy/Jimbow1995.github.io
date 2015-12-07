/**
 * @fileOverview Holds scripts that take user input.
 * @name user.js
 */

document.addEventListener("keydown", keyDownHandler, false);
//event listener for mouse down
document.addEventListener("mousedown", mouseDownHandler, false);

/** Deals with key presses upon being pressed.**/
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
}

/** Deals with mouses presses upon pressed.**/
function mouseDownHandler()
{
    mouseX=event.pageX-canvas.offsetLeft;
    mouseY=event.pageY-canvas.offsetTop;
    if(gamestate == "menu")
      Menu.clicked(mouseX, mouseY);
    else if(gamestate == "winner" || gamestate=="winnerPlayer1" || gamestate=="winnerPlayer2")
      WinS.clicked(mouseX, mouseY);
    else if(gamestate == "loser")
      LoseS.clicked(mouseX, mouseY);
    else if(gamestate == "single")  
        Arrow.moveArrowMouse(mouseX,mouseY);
    else if(gamestate == "leaderboard")
        Leaderboard.clicked(mouseX,mouseY);
    else if(gamestate == "createJoin")
        MultiMenu.clicked(mouseX,mouseY);
    else if(gamestate == "invite")
        MultiMenu.clickedInvite(mouseX,mouseY);
   else if(gamestate == "gameList")
        MultiMenu.clickedGameList(mouseX,mouseY);
   else if(gamestate == "login")
        loadingS.clicked(mouseX,mouseY);
}
