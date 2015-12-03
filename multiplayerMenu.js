function multiplayerMenu() {
   
    this.createJoin = new Image();
    this.Invite = new Image();
    this.loadImg();
    this.selected;
}

multiplayerMenu.prototype.loadImg = function() {
    
    this.createJoin = new Image();
    this.Invite = new Image();
    this.createJoin.src = "assets/CreateJoin.png";
    this.Invite.src = "assets/invite.png";
}

multiplayerMenu.prototype.drawCreateJoin = function () {
    ctx.drawImage(this.createJoin, 0, 0);
}

multiplayerMenu.prototype.drawInviteList = function(){
    ctx.drawImage(this.Invite, 0, 0);
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
        var pos = Math.round((y-(10*ratioHeight)) / (20*ratioHeight));
        this.selected = pos;
        console.log(y);
        console.log(this.selected); 
        console.log(ratioHeight);   
    }
    if (x > 320*ratioWidht){
        console.log(this.selected);
        inviteID = usersFriends[this.selected].id;
        createGame();
    }
}
