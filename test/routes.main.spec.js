
var expect = require('chai').expect,
    request = require('supertest'),
    server = require('../server');

describe('Testing Main Routes', function() {

    describe('Index Route', function() {

        it('should render the master template with a form object', function(done) {
            request(server).get('/')
                .expect(200)
                .end(function(err, response){
                    expect(response.text).to.contain('<form action="/weather/forecast" method="POST">');
                    done();
                });
        });
    });
});