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
    var result = bowling.roll();
    expect(bowling.getScoreAfterRoll()).toEqual(10 - result);
  });

  it('calculates the pins available after the first roll', function() {
    bowling.roll = function() { return 3; };
    var result = bowling.roll();
    expect(bowling.getCurrentPinsAvailable()).toEqual(10 - result);

  });



});
