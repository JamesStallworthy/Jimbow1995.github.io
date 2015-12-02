function multiplayerMenu() {
   
    this.boardImg = new Image();
    this.loadImg();
    this.selected;
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
       if (this.selected == i){
           ctx.fillStyle = "#0000ff"; 
       }else{
           ctx.fillStyle = "#000000";
       }
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
    if (x < 320*ratioWidht){
        var pos = Math.round((y-10) / 30);
        this.selected = pos;
    }
    if (x > 320*ratioWidht){
        console.log(usersFriends);
        console.log(usersFriends[this.selected].id);
        inviteID = usersFriends[this.selected].id;
        createGame();
    }
}
