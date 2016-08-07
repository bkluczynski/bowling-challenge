'use strict'

function Bowling(){
  this.score = 0;
  this.pinsAvailable = 10;
}

Bowling.prototype.getCurrentScore = function(){
  return this.score;
}

Bowling.prototype.roll = function(){
  return Math.floor((Math.random() * this.pinsAvailable) + 1);
}
Bowling.prototype.getScoreAfterRoll = function(){
  var roll = this.roll();
  this.pinsAvailable -= roll;
  this.score += roll;
  return roll;
}
Bowling.prototype.getCurrentPinsAvailable = function(){
  this.getScoreAfterRoll();
  return this.pinsAvailable;
}
