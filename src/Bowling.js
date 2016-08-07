'use strict'

function Bowling(){
  this.score = 0;
  this.pinsAvailable = 10;
  this.currentRoll = 1;
  this.currentFrame = 1;
  this.framesHistory = [];
}

Bowling.prototype.getCurrentScore = function(){
  return this.score;
}

Bowling.prototype.roll = function(){
  return Math.floor((Math.random() * this.pinsAvailable) + 1);
}
Bowling.prototype.playBowling = function(){
  var roll = this.roll();
  this.pinsAvailable -= roll;
  this.score += roll;
  this.currentRoll++;
  this.framesHistory.push(roll);
  this.processBonus(roll);
  this.updateCurrentFrame();
  this.resetThePins();
  this.resetTheRolls();
  return roll;
}
Bowling.prototype.getCurrentPinsAvailable = function(){
  return this.pinsAvailable;
}
Bowling.prototype.getCurrentRoll = function(){
  return this.currentRoll;
}

Bowling.prototype.updateCurrentFrame = function(){
  if (this.currentRoll === 3){
    this.currentFrame++;
  }
}

Bowling.prototype.getCurrentFrame = function(){
  return this.currentFrame;
}
Bowling.prototype.resetThePins = function(){
  if (this.currentRoll === 3){
    this.pinsAvailable = 10
  }
}
Bowling.prototype.resetTheRolls = function(){
  if (this.currentRoll === 3){
    this.currentRoll = 1
  }
}

Bowling.prototype.processBonus = function(roll){
  if (this.currentRoll === 1 && roll === 10){
    this.score += this.framesHistory[this.currentFrame + 1];
  }
}
