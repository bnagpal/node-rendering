
var expect = require('chai').expect,
    request = require('supertest'),
    server = require('../server');

describe('Testing  Routes', function() {

    describe('Bhawna Route', function() {

        it('should render the bhawna template with a sample text', function(done) {
            request(server).get('/bhawna')
                .expect(200)
                .end(function(err, response){
                    expect(response.text).to.contain('Bhawna Page!');
                    done();
                });
        });
    });
});
