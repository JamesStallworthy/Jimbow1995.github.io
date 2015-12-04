function multiplayerMenu() {
   
    this.createJoin = new Image();
    this.Invite = new Image();
    this.GameList = new Image();
    this.loadImg();
    this.selected;
}

multiplayerMenu.prototype.loadImg = function() {
    
    this.createJoin = new Image();
    this.Invite = new Image();
    this.GameList = new Image();
    this.createJoin.src = "assets/CreateJoin.png";
    this.Invite.src = "assets/invite.png";
    this.GameList.src = "assets/ActiveGame.png";
}

multiplayerMenu.prototype.drawCreateJoin = function () {
    ctx.drawImage(this.createJoin, 0, 0);
    for(var i=0; i<invitedToList.length; i++){
        invitedToList[i].userMatchStatus();
    }
}

multiplayerMenu.prototype.drawInviteList = function(){
    ctx.drawImage(this.Invite, 0, 0);
    ctx.font = 'bold 10pt Calibri';
    for(var i=0; i<usersFriends.length; i++)
    {
       if (this.selected == i){
           ctx.fillStyle = "#CC0000"; 
       }else{
           ctx.fillStyle = "#000000";
       }
        ctx.fillText(usersFriends[i].displayName, 60, 30+(i*20));
    }
}

multiplayerMenu.prototype.drawGameList = function(){
    ctx.drawImage(this.GameList, 0, 0);
    if (x < 320*ratioWidht){
        var pos = Math.round((y-(30*ratioHeight)) / (20*ratioHeight));
        this.selected = pos; 
    }
    if (x > 320*ratioWidht){
        if (x < 240*ratioHeight){
                
        }
        else{
            
        }
    }
}

multiplayerMenu.prototype.clicked = function(x,y) {
    if (x < 320*ratioWidht){
        console.log("gamestate is now invite");
        gamestate = "invite";
    }
    else{
        activeGames();
        gamestate = "gameList";
    }
}

multiplayerMenu.prototype.clickedInvite = function(x,y) {
    if (x < 320*ratioWidht){
        var pos = Math.round((y-(30*ratioHeight)) / (20*ratioHeight));
        this.selected = pos; 
    }
    if (x > 320*ratioWidht){
        inviteID = usersFriends[this.selected].id;
        createGame();
    }
}

multiplayerMenu.prototype.clickedGameList = function(x,y) {
    if (x < 320*ratioWidht){
        var pos = Math.round((y-(30*ratioHeight)) / (20*ratioHeight));
        this.selected = pos; 
    }
    if (x > 320*ratioWidht){
        inviteID = usersFriends[this.selected].id;
        createGame();
    }
}

