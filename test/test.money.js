var expect = require('chai').expect;
var Money = require('../src/money.js');

describe('money', function () {
    it('should return 101 if majorAmount is set to 1 and minorAmount set to 1', function () {
        let money = new Money(1, 1);
        expect(money.toDecimal()).to.eql(101);
    });
});
