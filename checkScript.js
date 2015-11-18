function checkScript(){
  this.won =false;
  
}

checkScript.prototype.checkLine = function(xPos,yPos,xMove, yMove,counterCheck){
    if(Grid.grid[xPos+xMove][yPos-yMove] == counterCheck 
       && Grid.grid[xPos+(xMove*2)][yPos-(yMove*2)] == counterCheck 
       && Grid.grid[xPos+(xMove*3)][yPos-(yMove*3)] == counterCheck)
       this.won=true;
}

checkScript.prototype.check = function(x,y,counter){
    //Check Right
    if(x<=3)
        this.checkLine(x,y,1,0,counter);
    //Check Down Right
    if(!this.won && x<=3 && y>=3)
        this.checkLine(x,y,1,1,counter);
    //Check Down
    if(!this.won && y>=3)
        this.checkLine(x,y,0,1,counter);
    //Check Down Left
    if(!this.won && x>=3 && y>=3)
        this.checkLine(x,y,-1,1,counter);
    //Check Left
    if(!this.won && x>=3)
        this.checkLine(x,y,-1,0,counter);
    //Check Up Left
    if(!this.won && x>=3 && y<=2)
        this.checkLine(x,y,-1,-1,counter);
    //Check Up Right
    if(!this.won && x<=3 && y<=2)
        this.checkLine(x,y,1,-1,counter);
    if(this.won){
        this.won = false;
        console.log("Gamestate is winscreen");
        console.log("Player" + counter + " won!");
        gamestate="winnerPlayer" + counter;
        reset();
    }
}