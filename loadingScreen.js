/**
 * @fileOverview Holds scripts that control the login screen.
 * @name loadingScreen.js
 */

/** 
Constructor calls method to load all the images used for the win screens.
@class loadingScreen
@classdesc Holds images and draws multiple different screens once the game loads.
*/
function loadingScreen() {
  this.loading = new Image();
  this.login = new Image();
  this.loadImg();
}
/**
* Loads images for the winScreens.
* @memberof loadingScreen
*/
loadingScreen.prototype.loadImg = function () {
  this.loading = new Image();
  this.loading.src = "assets/Loading.png";
  this.login = new Image();
  this.login.src = "assets/Login.png";
}

/**
* Draw loading screen.
* @memberof loadingScreen
*/
loadingScreen.prototype.drawLoading = function () {
  ctx.drawImage(this.loading, 0, 0);
}

/**
* Draw login screen.
* @memberof loadingScreen
*/
loadingScreen.prototype.drawLogin = function () {
  ctx.drawImage(this.login, 0, 0);
}


/**
* Method that checks if login button has been clicked, if so call google login
*@param {integer} x Mouses X position.
*@param {integer} y Mouses Y position.
* @memberof loadingScreen
*/
loadingScreen.prototype.clicked = function (mouseX, mouseY) {
  gapi.auth.signIn();
}