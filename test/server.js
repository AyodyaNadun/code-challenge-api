let server = require("../server");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { describe } = require("mocha");
const { response } = require("../server");

// Assertion
chai.should();
chai.use(chaiHttp);

// User routes tests
describe('User APIs', () => {
    describe('Test GET route /api/v1/user/search/field', () => {
        it('It should return all searchable fields in user', (done) => {
            chai.request(server)
            .get('/api/v1/user/search/field')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.data.should.be.a('array');
                response.body.data.length.should.not.be.eq(0);
            done();
            });
        });
    })
})

describe('User APIs', () => {
    describe('Test GET route /api/v1/user/search/test', () => {
        it('It should return all search results of users', (done) => {
            let user = {
                    search_term:"verified",
                    search_value:true,
                    page:1
            }
            chai.request(server)
            .post('/api/v1/user/search/test')
            .send(user)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.data.should.be.a('object');
                response.body.data.results.should.be.a('array');
            done();
            });
        });
    })
})

// Organization routes tests
describe('Organization APIs', () => {
    describe('Test GET route /api/v1/organization/search/test', () => {
        it('It should return all search results of organizations', (done) => {
            let user = {
                search_term:"details",
                search_value:"MegaCörp",
                page:1
            }
            chai.request(server)
            .post('/api/v1/organization/search/test')
            .send(user)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.data.should.be.a('object');
                response.body.data.results.should.be.a('array');
            done();
            });
        });
    })
})

// Ticket routes tests
describe('Ticket APIs', () => {
    describe('Test GET route /api/v1/ticket/search/test', () => {
        it('It should return all search results of tickets', (done) => {
            let user = {
                search_term:"ticket_id",
                search_value:"1a227508-9f39-427c-8f57-1b72f3fab87c",
                page: 1
            }
            chai.request(server)
            .post('/api/v1/ticket/search/test')
            .send(user)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.data.should.be.a('object');
                response.body.data.results.should.be.a('array');
            done();
            });
        });
    })
})
