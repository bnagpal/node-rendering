
var expect = require('chai').expect,
    sinon = require('sinon'),
    request = require('request'),
    utils = require('../routes/utils');

describe('Testing Routing Utilities', function() {

    describe('getDataFromEndpoint', function() {
        describe('Successful Responses', function() {

            it('should resolve the promise with the data from the request', function(done) {
                utils.getDataFromEndpoint('test')
                    .then(function(response) {
                        expect(response).to.have.property('query');
                        done();
                    });
            });

            before(function(){
                sinon.stub(request, 'get').yields(null, null, {query: {}});
            });

            after(function(){
                request.get.restore();
            });
        });

        describe('Unsuccessful Responses', function() {

            it('should reject the promise with the error from the request', function(done) {
                utils.getDataFromEndpoint('test')
                    .then(function(response) {}, function(reason) {
                        expect(reason).to.equal('ERROR');
                        done();
                    });
            });

            before(function(){
                sinon.stub(request, 'get').yields('ERROR', null, null);
            });

            after(function(){
                request.get.restore();
            });
        });
    });
});