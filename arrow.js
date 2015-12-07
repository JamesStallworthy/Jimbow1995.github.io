/**
 * @fileOverview Holds the game controls, creates the arrow and then controls it and placement of the counter.
 * @name arrow.js
 */

/** 
Constructor creates the variables for the class.
@class arrow
*/


function arrow(){
    this.arrowLoaded = false;
    this.rightPressed = false; 
    this.leftPressed = false;
    this.spacebarPressed =false;
    this.pickerPlace = 0; 
    this.Turn = 0; 
    this.Playerturn = 0; 
    this.arrowData = {x:80, y:0, width:75, height:73};
    this.loadArrow();
}

arrow.prototype.resetArrow = function(){
    this.arrowLoaded = false;
    this.rightPressed = false; 
    this.leftPressed = false;
    this.spacebarPressed =false;
    this.pickerPlace = 0; 
    this.Turn = 0; 
    this.Playerturn = 0; 
    this.arrowData = {x:80, y:0, width:75, height:73};
}

/** The lodArrow function gets the image of each colour counter */
arrow.prototype.loadArrow = function(){
    this.arrowImgPlayer1 = new Image(); 
    this.arrowImgPlayer1.src = "assets/arrowRed.png";
    this.arrowImgPlayer2 = new Image(); 
    this.arrowImgPlayer2.src = "assets/arrowYellow.png";
}


/** The drawArrow function draws the image we got in the last function */
arrow.prototype.drawArrow = function(){
    this.moveArrow(); 
    if(this.Playerturn == 1)
        {
            ctx.drawImage(this.arrowImgPlayer1,this.arrowData.x,this.arrowData.y, 40 , 35); 
        }
    if(this.Playerturn == 2)
        {
            ctx.drawImage(this.arrowImgPlayer2,this.arrowData.x,this.arrowData.y, 40 , 35);    
        }  
}

/** The moveArrow function uses the arrow keys to move the arrow */
arrow.prototype.moveArrow = function(){
		
    if(this.rightPressed){
        this.arrowData.x += 74; 
        this.rightPressed = false;
        this.spacebarPressed = false;
        this.pickerPlace++;
        
        if(this.pickerPlace > 6)
            {
                this.pickerPlace = 6; 
            }      
        }
      
        if(this.arrowData.x >= 521){
            this.arrowData.x = 521;
        }

    
		if(this.leftPressed){
            this.arrowData.x -= 74; 
            this.leftPressed = false;
            this.spacebarPressed = false;
            this.pickerPlace--;
            if(this.pickerPlace < 0)
                {
                    this.pickerPlace = 0;
                }
        }
		
		//if the arrow goes less than the first column
		if(this.arrowData.x <= 78){
             this.arrowData.x = 78;
		}
}

/** The moveArrowMouse uses the mouse to click on a place to place a counter*/
arrow.prototype.moveArrowMouse = function(xpos,ypos){
                if(xpos >= 65*ratioWidht && xpos <= 135*ratioWidht){
                    if (gamestate == "takeTurn"){
                        this.arrowData.x = 74;
                        Grid.insertCounter(Arrow.pickerPlace,1);
                        console.log("Your turn was: ", Arrow.pickerPlace);
                        this.pickerPlace = 0;
                        takeTurn(Arrow.pickerPlace);
                    }else {
                        this.arrowData.x = 74;  
                        this.pickerPlace = 0;
                        this.Turn++;
                        Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
                    }
                }
                else if(xpos >= 136*ratioWidht && xpos <=207*ratioWidht){
                     if (gamestate == "takeTurn"){
                        this.arrowData.x = 154;
                        Grid.insertCounter(Arrow.pickerPlace,1);
                        console.log("Your turn was: ", Arrow.pickerPlace);
                        this.pickerPlace = 1;
                        takeTurn(Arrow.pickerPlace);
                     } else {
                        this.arrowData.x = 154;
                        this.pickerPlace = 1;
                        this.Turn++;
                        Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);  
                        }
               }
                else if(xpos >= 208*ratioWidht && xpos <=280*ratioWidht){
                    if (gamestate == "takeTurn"){
                        this.arrowData.x = 228;
                        Grid.insertCounter(Arrow.pickerPlace,1);
                        console.log("Your turn was: ", Arrow.pickerPlace);
                        this.pickerPlace = 2;
                        takeTurn(Arrow.pickerPlace);
                     } else {
                        this.arrowData.x = 228;
                        this.pickerPlace = 2;
                        this.Turn++;
                        Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
                     }
               }
                else if(xpos >= 281*ratioWidht && xpos <=355*ratioWidht){
                    if(gamestate == "takeTurn"){
                        this.arrowData.x = 302;
                        Grid.insertCounter(Arrow.pickerPlace,1);
                        console.log("Your turn was: ", Arrow.pickerPlace);
                        this.pickerPlace = 3;
                        takeTurn(Arrow.pickerPlace);
                     } else {
                        this.arrowData.x = 302;
                        this.pickerPlace =3;
                        this.Turn++;
                        Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
                     }
               }
                else if(xpos >= 356*ratioWidht && xpos <=430*ratioWidht){
                    if(gamestate == "takeTurn"){
                        this.arrowData.x = 376;
                        Grid.insertCounter(Arrow.pickerPlace,1);
                        console.log("Your turn was: ", Arrow.pickerPlace);
                        this.pickerPlace = 3;
                        takeTurn(Arrow.pickerPlace);
                     } else {
                        this.arrowData.x = 376;
                        this.pickerPlace = 4;
                        this.Turn++;
                        Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
                     }
               }
                else if(xpos >= 431*ratioWidht && xpos <=505*ratioWidht){
                     if(gamestate == "takeTurn"){
                        this.arrowData.x = 450;
                        Grid.insertCounter(Arrow.pickerPlace,1);
                        console.log("Your turn was: ", Arrow.pickerPlace);
                        this.pickerPlace = 5;
                        takeTurn(Arrow.pickerPlace);
                     } else {
                        this.arrowData.x = 450;
                        this.pickerPlace = 5;
                        this.Turn++;
                        Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
                     }
               }        
                else if(xpos >= 506*ratioWidht && xpos <=580*ratioWidht){
                    if(gamestate == "takeTurn"){
                        this.arrowData.x = 524;
                        Grid.insertCounter(Arrow.pickerPlace,1);
                        console.log("Your turn was: ", Arrow.pickerPlace);
                        this.pickerPlace = 6;
                        takeTurn(Arrow.pickerPlace);
                     } else {
                        this.arrowData.x = 524;
                        this.pickerPlace = 6;
                        this.Turn++;
                        Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
                     }
               }
}


/** The placeCounter function uses the spacebar to place the counter in the position of where the arrow is */
arrow.prototype.placeCounter = function(){
  if(Grid.grid[this.pickerPlace][5] == 0)
    {
        if(this.Turn % 2 == 0) // uses modulous to see whose go it is, if the turn is not even then it is player 1s if it sint its player 2s 
        {
            this.Playerturn = 1; 
        }
        else
        {
            this.Playerturn = 2; 
        }

        if(this.spacebarPressed)
            {
                if (gamestate == "takeTurn"){
                    Grid.insertCounter(Arrow.pickerPlace,1);
                    console.log("Your turn was: ", Arrow.pickerPlace);
                    takeTurn(Arrow.pickerPlace);
                    this.spacebarPressed = false;
                }else{
                    Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
                    this.Turn++;
                    this.spacebarPressed = false;
                }
            }
    }
}
