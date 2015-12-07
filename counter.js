/**
 * @fileOverview Holds the game logic behind the counters of the game.
 * @name counter.js
 */

/** 
Constructor loads images.
@class counters
@classdesc Object that holds both red and yellow counter images.
*/

function counters(){
    this.redCounterImg = new Image();
    this.yellowCounterImg = new Image();
    this.redCounterImg.src = "assets/counterRed.png";
    this.yellowCounterImg.src ="assets/counterYellow.png";
}