'use strict';

let expect = require('chai').expect;
let RelativeDate = require('../src');
let moment = require('moment');

const tests = {
  1: 'Date is today',
  2: 'Date is yesterday',
  3: 'Date is a day',
  4: 'Date is a parsed date of format D MMM, YYYY',
  5: 'Date is from the future',
  6: 'Date is invalid'
};

const date = moment(Date.now());

describe('#RelativeDate', function() {
  it(tests[1], function() {
    const result = RelativeDate(date).text;
    expect(result).to.match(/pm||am/g);
  });

  it(tests[2], function() {
    const result = RelativeDate(date.subtract(1, 'day')).text;
    expect(result).to.equal('Yesterday');
  });

  it(tests[3], function() {
    const result = RelativeDate(
      date.subtract(Math.floor(Math.random() * 6) + 2, 'd')
    ).text;
    expect(result).to.match(
      /Monday||Tuesday||Wednesday||Thursday||Friday||Saturday||Sunday/
    );
  });

  it(tests[4], function() {
    const result = RelativeDate(date.subtract(8, 'd')).text;
    const regexp = new RegExp(new Date().getFullYear());
    expect(result).to.match(regexp);
  });

  it(tests[5], function() {
    const result = RelativeDate(date.add(100, 'M')).text;
    expect(result).to.match(/from\snow/g);
  });

  it(tests[6], function() {
    const result = RelativeDate(moment([2017, 40, 20])).text;
    expect(result).to.equal('Invalid Date');
  });
});
