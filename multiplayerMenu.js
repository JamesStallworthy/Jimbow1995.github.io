function multiplayerMenu() {
   
    this.boardImg = new Image();
    this.loadImg();
}

multiplayerMenu.prototype.loadImg = function() {
    
    this.boardImg = new Image();
    this.boardImg.src = "";
}

multiplayerMenu.prototype.drawCreateJoin = function () {

}

multiplayerMenu.prototype.drawInviteList = function(){
    ctx.font = 'bold 10pt Calibri';
    for(var i=0; i<usersFriends.length; i++)
    {
        ctx.fillText(usersFriends[i].displayName, 60, 10+(i*20));
    }
}

multiplayerMenu.prototype.clicked = function(x,y) {
    if (x < 320*ratioWidht){
        console.log("gamestate is now invite");
        gamestate = "invite";
    }
    else{
        joinGame();
    }
}

multiplayerMenu.prototype.clickedInvite = function(x,y) {
    console.log(y);
    var pos = (y-10) / 30;
    console.log(pos);
}
