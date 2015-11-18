function winScreen(){
  this.winImg = new Image();
  this.winImgPly1 = new Image();
  this.winImgPly2 = new Image();
    
  this.loadImg();
}
//_-------------------
//CHange asset path
winScreen.prototype.loadImg = function(){
    this.winImg = new Image();
    this.winImg.src = "assets/winner.jpg";
    this.winImgPly1 = new Image();
    this.winImgPly1.src ="assets/redwins.jpg"; 
    this.winImgPly2 = new Image();
    this.winImgPly2.src ="assets/yellowwins.jpg"; 
}

winScreen.prototype.drawImg = function(){
   ctx.drawImage(this.winImg,0,0);
}

winScreen.prototype.drawImgWin1 = function(){
   ctx.drawImage(this.winImgPly1,0,0);
}

winScreen.prototype.drawImgWin2 = function(){
   ctx.drawImage(this.winImgPly2,0,0);
}

winScreen.prototype.clicked = function(mouseX, mouseY){
  gamestate = "menu";
}