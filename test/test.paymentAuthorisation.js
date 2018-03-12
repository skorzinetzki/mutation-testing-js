var expect = require('chai').expect;
var paymentAuthorisation = require('../src/paymentAuthorisation.js');

describe('paymentAuthorisation', function () {
    it('should not need an approval when initialized', function () {
        let authorisation = new paymentAuthorisation();
        expect(authorisation.approvalNeeded).to.eql(false);
    });
});
