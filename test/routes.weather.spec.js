
var expect = require('chai').expect,
    request = require('supertest'),
    server = require('../server');

describe('Testing Weather Routes', function() {

    describe('Weather Route', function() {

        it('should render the master template with a form object', function(done) {
            request(server).get('/weather/london')
                .expect(200)
                .end(function(err, response){
                    expect(response.text).to.contain('London, United Kingdom');
                    done();
                });
        });
    });

    describe('Forecast Route', function() {

        it('should render the master template with a form object', function(done) {
            request(server)
                .post('/weather/forecast')
                .send({ location: 'london' })
                .expect(302)
                .end(function(err, response){
                    expect(response.text).to.equal('Moved Temporarily. Redirecting to /weather/london');
                    done();
                });
        });
    });

    describe('Redirect Route', function() {

        it('should render the master template with a form object', function() {
            return request(server).get('/weather').expect(302);
        });
    });
});