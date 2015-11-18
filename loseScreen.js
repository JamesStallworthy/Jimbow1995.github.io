function loseScreen(){
  this.loseImg = new Image();
  this.loadImg();
}

loseScreen.prototype.loadImg = function(){
    this.loseImg = new Image();
    this.loseImg.src = "assets/loser.jpg";
}

loseScreen.prototype.drawImg = function(){
   ctx.drawImage(this.loseImg,0,0);
}

loseScreen.prototype.clicked = function(mouseX, mouseY){
  gamestate = "menu";
}