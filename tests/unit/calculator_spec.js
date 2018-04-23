var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('has clickable number buttons', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.operatorClick("=");
    assert.equal(23456, calculator.runningTotal);
  })

  it('has a functioning clear button', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.numberClick(6);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(48, calculator.runningTotal);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(23, calculator.runningTotal);
  })

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(60, calculator.runningTotal);
  })

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
  })

  it('can divide numbers to decimal places', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(6.25, calculator.runningTotal);
  })

  it('can chain functions with operator clicks', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(20, calculator.runningTotal);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(24, calculator.runningTotal);
    calculator.operatorClick("/");
    calculator.numberClick(6);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(2, calculator.runningTotal);
  })





});
