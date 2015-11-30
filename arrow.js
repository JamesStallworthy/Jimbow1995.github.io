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
//Loads the grid image
arrow.prototype.loadArrow = function(){
    this.arrowImgPlayer1 = new Image(); 
    this.arrowImgPlayer1.src = "assets/arrowRed.png";
    this.arrowImgPlayer2 = new Image(); 
    this.arrowImgPlayer2.src = "assets/arrowYellow.png";
}


//Draw arrow to the screen
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

// use arrow keys to pick which column you want a counter 
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
		
		//of the spaceship goes less than zero reset its position
		if(this.arrowData.x <= 78){
             this.arrowData.x = 78;
		}
}

arrow.prototype.moveArrowMouse = function(xpos,ypos){
                if(xpos >= 65 && xpos <= 135){
                    this.arrowData.x = 74;  
                    this.pickerPlace = 0;
                    this.Turn++;
                    Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
                }
                else if(xpos >= 136 && xpos <=207){
                    this.arrowData.x = 154;
                    this.pickerPlace = 1;
                    this.Turn++;
                    Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
               }
                else if(xpos >= 208 && xpos <=280){
                    this.arrowData.x = 228;
                    this.pickerPlace = 2;
                    this.Turn++;
                    Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
               }
                else if(xpos >= 281 && xpos <=355){
                    this.arrowData.x = 302;
                    this.pickerPlace =3;
                    this.Turn++;
                    Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
               }
                else if(xpos >= 356 && xpos <=430){
                    this.arrowData.x = 376;
                    this.pickerPlace = 4;
                    this.Turn++;
                    Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
               }
                else if(xpos >= 431 && xpos <=505){
                    this.arrowData.x = 450;
                    this.pickerPlace = 5;
                    this.Turn++;
                    Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
               }        
                else if(xpos >= 506 && xpos <=580){
                    this.arrowData.x = 524;
                    this.pickerPlace = 6;
                    this.Turn++;
                    Grid.insertCounter(Arrow.pickerPlace,Arrow.Playerturn);
               }
}


// uses spacebar to place a counter, it works out what whose turn it is and places the right colour counter
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
