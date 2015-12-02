function multiplayerMenu() {
   
    this.boardImg = new Image();
    this.loadImg();
}

multiplayerMenu.prototype.loadImg = function() {
    
    this.boardImg = new Image();
    this.boardImg.src = "";
}

multiplayerMenu.prototype.drawImgBoard = function () {
    //ctx.drawImage(this.boardImg, 0, 0);
    ctx.font = 'bold 10pt Calibri';
    for(var i=0; i<leaderboardData.length; i++)
    {
        ctx.fillText(leaderboardData[i].formattedScoreRank, 60, 80+(i*20));
        ctx.fillText(leaderboardData[i].formattedScore, 80, 80+(i*20));
        ctx.fillText(leaderboardData[i].player.name.givenName, 100, 80+(i*20));
    }
}

multiplayerMenu.prototype.clicked = function(x,y) {
    console.log("Gamestate is menu");
    gamestate="menu";
}