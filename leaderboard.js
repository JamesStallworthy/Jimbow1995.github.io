'use strict';

function leaderBoard() {
   
    this.boardImg = new Image();
    this.loadImg();
}

leaderBoard.prototype.loadImg = function() {
    
    this.boardImg = new Image();
    this.boardImg.src = "assets/LeaderBoard.jpg";
}

leaderBoard.prototype.drawImgBoard = function () {
    ctx.drawImage(this.boardImg, 0, 0);
}

leaderBoard.prototype.clicked = function(x,y) {
    if (x >= 530 && x <= 635 && y >= 432 && y <= 476){
    console.log("Gamestate is menu");
    gamestate="menu";
}
}