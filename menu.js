/**
 * @fileOverview Handles the main menu script
 * @name menu.js
 */

/** 
Constructor Initialises variables and runs the image loader function
@class menu
@classdesc Class holds scripts and data for drawing the menu and menu functionality.
*/
function menu() {
  this.menuImg = new Image();
  this.clickedSinglePlayer = false;
  this.clickedMultiplayer = false;
  this.clickedQuit = false;
  this.loadMenuImg();
}

/**
* loads data into the menuImg variable
*@memberof menu
*/
menu.prototype.loadMenuImg = function () {
  this.menuImg = new Image();
  this.menuImg.src = "assets/menu.jpg";
}

/**
* loads data into the menuImg variable
*@memberof menu
*/
menu.prototype.drawMenu = function () {
  //draws the menu
  ctx.drawImage(this.menuImg, 0, 0);
}
/**
* Checks the location of a mouse click and determines if a button was pressed, if it was, the required function is run or gamestate is changed
*@param {integer} x The x position of the mouse when clicked
*@param {integer} y The y position of the mouse when clicked
*@memberof menu
*/
menu.prototype.clicked = function (x, y) {
  //check for clicked buttons
  if (x >= 57 * ratioWidht && x <= 266 * ratioWidht && y >= 208 * ratioHeight && y <= 320 * ratioHeight) {
    console.log("Gamestate is singleplayer");
    gamestate = "single";
  }
  else if (x >= 367 * ratioWidht && x <= 576 * ratioWidht && y >= 208 * ratioHeight && y <= 320 * ratioHeight) {
    console.log("Gamestate is createJoin");
    gamestate = "createJoin";
  }
  else if (x >= 214 * ratioWidht && x <= 426 * ratioWidht && y >= 316 * ratioHeight && y <= 454 * ratioHeight) {
    gamestate = "leaderboard";
    if (googleAPILoaded) {
      loadLeaderboard('CgkIw5Xv3M4GEAIQAQ', 'ALL_TIME', 'PUBLIC');
    }
  }
}

