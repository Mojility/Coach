let expect = require('chai').expect;
let {defineSupportCode} = require('cucumber');
let FizzBuzzer = require('../../src/fizz_buzzer');

defineSupportCode(({Given, When, Then}) => {
  let fb;

  Given('I have a fizzbuzzer', () => {
    fb = new FizzBuzzer();
  });

  When('I give it the numbers {int} through {int}', (low, high) => {
  });

  Then('it should produce output like this', (table) => {
    table.hashes().forEach((data) => {
      expect(fb.responseFor(data.input)).to.equal(data.output);
    });
  });
});
