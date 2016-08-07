describe ('A bowling game', function() {

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts with zero points', function() {
    expect(bowling.getCurrentScore()).toEqual(0);
  });









});
