describe ('A bowling game', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with zero points', function() {
    expect(bowling.getCurrentScore()).toEqual(0);
  });

  it('calculates the score after the first roll', function() {
    bowling.roll = function() { return 5; };
    var result = bowling.playBowling();
    expect(bowling.playBowling()).toEqual(10 - result);
  });

  it('calculates the pins available after the first roll', function() {
    bowling.roll = function() { return 3; };
    var result = bowling.playBowling();
    expect(bowling.getCurrentPinsAvailable()).toEqual(10 - result);

  });

  it('shows the current roll in the frame', function(){
    bowling.playBowling();
    expect(bowling.getCurrentRoll()).toEqual(2);
  });

  it('shows the current frame in the game', function(){
    for (var i = 0; i < 9; i++) {
      bowling.playBowling();
    }
    expect(bowling.getCurrentFrame()).toEqual(5);
  });

  it ('calculates the bonus for STRIKE correctly', function(){
    bowling.roll = function(){ return 10; };
    var result1 = bowling.playBowling();
    var result2 = bowling.playBowling();
    expect(bowling.getCurrentScore()).toEqual(10 + 2 * result1 + 2 * result2)
  });








});
