function menu(){
    this.menuImg = new Image();
    this.clickedSinglePlayer=false;
    this.clickedMultiplayer=false;
    this.clickedQuit=false;
    this.loadMenuImg();
}

menu.prototype.loadMenuImg = function(){
    this.menuImg = new Image();
    this.menuImg.src = "assets/menu.jpg";
}

menu.prototype.drawMenu = function(){
    //draws the menu
    ctx.drawImage(this.menuImg,0,0);
}

menu.prototype.clicked = function(x,y){
  //check for clicked buttons
  if(x>=57 && x<=266 && y>=208 && y<=320){
    console.log("Gamestate is singleplayer");
    gamestate="single";
  }
  else if(x>=367 && x<=576 && y>=208 && y<=320){
    console.log("Gamestate is multiplayer");
    gamestate="multi";
  }
  else if(x>=214 && x<=426 && y>=316 && y<=454){
    gamestate="quit";
  }
}

