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
    
}

function keyUpHandler(e) {
		//39 is the keycode for left arrow
		if(e.keyCode == 39) {
			Arrow.rightPressed = false;
            
		}
		//37 is the keyCode for right arrow
		else if(e.keyCode == 37) {
			Arrow.leftPressed = false;
		}
         else if(e.keyCode == 32)
        {
            Arrow.spacebarPressed =false;  
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
