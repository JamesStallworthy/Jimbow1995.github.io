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
    //ctx.drawImage(this.boardImg, 0, 0);
    ctx.font = 'bold 10pt Calibri';
    for(i=0; i<leaderboardData.length; i++)
    {
        ctx.fillText(leaderboardData[0].formattedScoreRank, 60, 80+1*10);
        ctx.fillText(leaderboardData[0].formattedScore, 80, 80+1*10);
        ctx.fillText(leaderboardData[0].player.name.givenName, 100, 80+1*10)
    }
}

leaderBoard.prototype.clicked = function(x,y) {
    console.log("Gamestate is menu");
    gamestate="menu";
}