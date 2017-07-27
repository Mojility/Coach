let expect = require('chai').expect;
let {defineSupportCode} = require('cucumber');
let FizzBuzzer = require('../../src/fizz_buzzer');

defineSupportCode(({Given, Then}) => {
  let fb;

  Given(/^I have a fizzbuzzer$/, () => {
    fb = new FizzBuzzer();
  });

  Then(/^it should produce output like this$/, (table) => {
    table.hashes().forEach((data) => {
      expect(fb.responseFor(data.input)).to.equal(data.output);
    });
  });
});
