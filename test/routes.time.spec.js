
var expect = require('chai').expect,
    request = require('supertest'),
    server = require('../server');

describe('Testing Time Routes', function() {

    describe('Time Route', function() {

        it('should render the time template with current time', function(done) {
            request(server).get('/time')
                .expect(200)
                .end(function(err, response){
                    expect(response.text).to.contain('Current Time');
                    done();
                });
        });
    });
});
