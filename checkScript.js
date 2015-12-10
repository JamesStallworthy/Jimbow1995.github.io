/**
 * @fileOverview Checks for a row after counter placement
 * @name checkScript.js
 */

/** 
Constructor sets win value to false
@class checkScript
@classdesc Checks directions based upon position in the grid to find a row of four
*/
function checkScript() {
    this.won = false;
    this.draw = false;

}

/**
* Checks one row from a given point in a given direction.
*@param {integer} xPos The x position at which the check starts
*@param {integer} yPos The y position at which the check starts
*@param {integer} xMove The amount moved in the x direction -1/0/1
*@param {integer} yMove The amount moved in the y direction -1/0/1
*@param {integer} counterCheck The counter being checked for
*@memberof checkScript
*/
checkScript.prototype.checkLine = function (xPos, yPos, xMove, yMove, counterCheck) {
    if (Grid.grid[xPos + xMove][yPos - yMove] == counterCheck
        && Grid.grid[xPos + (xMove * 2)][yPos - (yMove * 2)] == counterCheck
        && Grid.grid[xPos + (xMove * 3)][yPos - (yMove * 3)] == counterCheck)
        this.won = true;
}

/**
* Checks which directions need to be checked based on the position in the gird and calls checkLine with the required parameters
*@param {integer} x The x position at which the check starts
*@param {integer} y The y position at which the check starts
*@param {integer} counter The counter type at this position
*@memberof checkScript
*/
checkScript.prototype.check = function (x, y, counter) {
    //Check Right
    if (x <= 3)
        this.checkLine(x, y, 1, 0, counter);
    //Check Down Right
    if (!this.won && x <= 3 && y >= 3)
        this.checkLine(x, y, 1, 1, counter);
    //Check Down
    if (!this.won && y >= 3)
        this.checkLine(x, y, 0, 1, counter);
    //Check Down Left
    if (!this.won && x >= 3 && y >= 3)
        this.checkLine(x, y, -1, 1, counter);
    //Check Left
    if (!this.won && x >= 3)
        this.checkLine(x, y, -1, 0, counter);
    //Check Up Left
    if (!this.won && x >= 3 && y <= 2)
        this.checkLine(x, y, -1, -1, counter);
    //Check Up Right
    if (!this.won && x <= 3 && y <= 2)
        this.checkLine(x, y, 1, -1, counter);
    if (this.won) {
        this.won = false;
        console.log("Gamestate is winscreen");
        console.log("Player" + counter + " won!");
        gamestate = "winnerPlayer" + counter;
        reset();
    }
}

/**
*Checks if there are counters in every single slot in the grid and change image to a draw screen 
*@memberof checkScript
*/
checkScript.prototype.tieConditions = function () {
    draw = true;
    for (var i = 0; i <= 6; i++) {
        if (Grid.grid[i][5] == 0) {
            draw = false;
        }

    }
    if (draw) {
        console.log("draw!!!");
        gamestate = "draw";
    }
}
