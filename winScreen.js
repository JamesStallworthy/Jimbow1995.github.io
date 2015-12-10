/**
 * @fileOverview Holds scripts that control displaying win screen.
 * @name winScreen.js
 */

/** 
Constructor calls method to load all the images used for the win screens.
@class winScreen
@classdesc Holds images and draws multiple different screens once the game has finished.
*/
function winScreen(){
  this.winImg = new Image();
  this.winImgPly1 = new Image();
  this.winImgPly2 = new Image();
  this.ImgDrawScreen = new Image();
  this.loadImg();
}
 /**
* Loads images for the winScreens.
* @memberof winScreen
*/
winScreen.prototype.loadImg = function(){
    this.winImg = new Image();
    this.winImg.src = "assets/winner.jpg";
    this.winImgPly1 = new Image();
    this.winImgPly1.src ="assets/redwins.jpg"; 
    this.winImgPly2 = new Image();
    this.winImgPly2.src ="assets/yellowwins.jpg"; 
    this.ImgDrawScreen = new Image();
    this.ImgDrawScreen.src = "assets/draw.png";
}

 /**
* Draw win screen.
* @memberof winScreen
*/
winScreen.prototype.drawImg = function(){
   ctx.drawImage(this.winImg,0,0);
}

 /**
* Draws player 1 win screen.
* @memberof winScreen
*/
winScreen.prototype.drawImgWin1 = function(){
   ctx.drawImage(this.winImgPly1,0,0);
}

 /**
* Draws player 2 win screen.
* @memberof winScreen
*/
winScreen.prototype.drawImgWin2 = function(){
   ctx.drawImage(this.winImgPly2,0,0);
}

 /**
* Draws draw screen
* @memberof winScreen
*/
winScreen.prototype.DrawImgDrawScreen = function(){
   ctx.drawImage(this.ImgDrawScreen,0,0);
}


 /**
* Method that checks if either menu or leaderBoard buttons have been clicked
*@param {integer} x Mouses X position.
*@param {integer} y Mouses Y position.
* @memberof winScreen
*/
winScreen.prototype.clicked = function(mouseX, mouseY){
  gamestate = "menu";
}