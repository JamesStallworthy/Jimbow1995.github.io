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
    ctx.font = 'bold 20pt Calibri';
    for(var i=0; i<leaderboardData.length; i++)
    {
        ctx.textAlign="center"; 
        ctx.fillText(leaderboardData[i].formattedScoreRank, 85, 110+(i*30));
        ctx.textAlign="left"; 
        ctx.fillText(leaderboardData[i].player.name.givenName + " " + leaderboardData[i].player.name.familyName , 140, 110+(i*30));
        ctx.textAlign="center"; 
        ctx.fillText(leaderboardData[i].formattedScore, 525, 110+(i*30));
    }
}

leaderBoard.prototype.clicked = function(x,y) {
    console.log("Gamestate is menu");
    gamestate="menu";
}