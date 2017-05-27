'use strict';

var should = require('chai').should();
var expect = require('chai').expect;
var RelativeDate = require('../relative_date');
var moment = require('moment');

const tests = {
    1: 'Date is today',
    2: 'Date is yesterday',
    3: 'Date is a day',
    4: 'Date is a parsed date of format M/D/YYYY',
    5: 'Date is from the future',
    6: 'Date is invalid'
}

describe('#RelativeDate', function() {
    it(tests[1], function() {
        var result = RelativeDate(moment(new Date())).text;
        result.should.match(/pm||am/g);
    });

    it(tests[2], function() {
        var result = RelativeDate(moment(new Date()).subtract(1, 'day')).text;
        result.should.equal('Yesterday');
    });

    it(tests[3], function() {
        var result = RelativeDate(moment().subtract(Math.floor(Math.random() * 7) + 1, 'd')).text;
        result.should.match(/Monday||Tuesday||Wednesday||Thursday||Friday||Saturday||Sunday/g);
    });

    it(tests[4], function() {
        var result = RelativeDate(moment(new Date()).subtract(8, 'd')).text;
        var regexp = new RegExp(new Date().getFullYear(), 'g')
        result.should.match(regexp);
    });

    it(tests[5], function() {
        var result = RelativeDate(moment().add(100, 'M')).text;
        result.should.match(/from\snow/g);
    });

    it(tests[6], function() {
        var result = RelativeDate(moment([2017,40,20])).text;
        result.should.equal("Invalid Date");
    });
});
