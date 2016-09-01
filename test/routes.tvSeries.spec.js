
var expect = require('chai').expect,
    request = require('supertest'),
    server = require('../server');

describe.only('Testing TV Series Routes', function() {

    describe('TV Series', function() {

        it('should render the tv series template with searched time', function(done) {
            request(server).get('/tvSeries')
                .expect(200)
                .end(function(err, response){
                    expect(response.text).to.contain('Results');
                    done();
                });
        });
    });
});
