/**
 * @fileOverview Holds the game logic behind the grid/board of the game.
 * @name grid.js
 */

/** 
Constructor calls methods to create the grid and load the image.
@class grid
@classdesc Class holds scripts and data for the grid/board.
*/
function grid(){
    //0 = no counter, 1 = red, 2=yellow
    this.grid = new Array(7);
    this.gridImg = new Image();
    this.createArray();
    this.loadGrid();
    this.clearArray();
}

 /**
* Loads images for the grid.
* @memberof grid
*/
grid.prototype.loadGrid = function(){
    this.gridImg = new Image();
    this.gridImg.src = "assets/grid.png";
}

 /**
* Draw method to draw grid image to screen.
* @memberof grid
*/
grid.prototype.drawGrid = function(){
     ctx.drawImage(this.gridImg,0,0);
}

 /**
* Initialises the grid array.
* @memberof grid
*/
grid.prototype.createArray = function(){
    for (var i = 0; i < 10; i++) {
        this.grid[i] = new Array(6);
    }
}
 /**
* Fills the grid array with 0's.
* @memberof grid
*/
grid.prototype.clearArray = function(){
    for (var x=0; x <7; x++){
        for(var y=0; y<6 ; y++){
            this.grid[x][y]=0;
        }
    }
}

 /**
* Method for inserting counters into the grid.
*@param {integer} col Number of the column to insert counter.
*@param {integer} team ID of the counter colour, 1 = Red, 2 = Yellow.
* @memberof grid
*/
grid.prototype.insertCounter = function(col, team){
    for (var i = 0; i < 6 ; i++){
        if (this.grid[col][i]==0){
            this.grid[col][i] = team;
            console.log("Inserted counter into col: "+col+" row: "+i + " for team: "+ team);
            break;
        }
    }
}

 /**
* Method for drawing counters to grid.
* @memberof grid
*/
grid.prototype.drawCountersToGrid = function(){
    for (var x = 0; x < 7 ; x++){
        for (var y = 0; y < 6 ; y++){
            if(this.grid[x][y]!=0){
                if(this.grid[x][y]==1){
                    ctx.drawImage(Counter.redCounterImg,70+(x*74),407 - (y*74));
                    Check.check(x,y,1);
                     Check.tieConditions();
                }
                if(this.grid[x][y]==2){
                    ctx.drawImage(Counter.yellowCounterImg,70+(x*74),407 - (y*74));
                    Check.check(x,y,2);
                    Check.tieConditions();
                }
            }
        }
    }
}



