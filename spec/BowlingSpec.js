describe ('A bowling game', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with zero points', function() {
    expect(bowling.getCurrentScore()).toEqual(0);
  });

  it('adds up the score when the game progresses', function() {
    bowling.roll = function() { return 5; };
    var result = bowling.roll();
    expect(bowling.getScoreAfterRoll()).toEqual(10 - result);
  });





});
