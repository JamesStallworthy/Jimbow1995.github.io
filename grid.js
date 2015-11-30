function grid(){
    //0 = no counter, 1 = red, 2=yellow
    this.grid = new Array(7);
    this.gridImg = new Image();
    this.createArray();
    this.loadGrid();
    this.clearArray();
}

//Loads the grid image
grid.prototype.loadGrid = function(){
    this.gridImg = new Image();
    this.gridImg.src = "assets/grid.png";
}

//Draw grid to the screen
grid.prototype.drawGrid = function(){
     ctx.drawImage(this.gridImg,0,0);
}

//clears the array so that it is empty
grid.prototype.createArray = function(){
    for (var i = 0; i < 10; i++) {
        this.grid[i] = new Array(6);
    }
}

grid.prototype.clearArray = function(){
    for (var x=0; x <7; x++){
        for(var y=0; y<6 ; y++){
            this.grid[x][y]=0;
        }
    }
}

//Column you want to insert into and the team that of the counter being inserted
//1 = red, 2=yellow
grid.prototype.insertCounter = function(col, team){
    for (var i = 0; i < 6 ; i++){
        if (this.grid[col][i]==0){
            this.grid[col][i] = team;
            console.log("Inserted counter into col: "+col+" row: "+i + " for team: "+ team);
            break;
        }
    }
}

grid.prototype.drawCountersToGrid = function(){
    for (var x = 0; x < 7 ; x++){
        for (var y = 0; y < 6 ; y++){
            if(this.grid[x][y]!=0){
                if(this.grid[x][y]==1){
                    console.log("Drawing red");
                    ctx.drawImage(Counter.redCounterImg,70+(x*74),407 - (y*74));
                    Check.check(x,y,1);
                }
                if(this.grid[x][y]==2){
                    console.log("Drawing yellow");
                    ctx.drawImage(Counter.yellowCounterImg,70+(x*74),407 - (y*74));
                    Check.check(x,y,2);
                }
            }
        }
    }
}



