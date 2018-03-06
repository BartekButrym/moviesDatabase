const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('/POST movie', () => {
    it('Should POST a movie', (done) => {
        chai.request(server)
            .post('/movies')
            .send({'title': 'Avengers'})
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('year');
                res.body.should.have.property('actors');
                res.body.should.have.property('plot');
                res.body.title.should.equal('The Avengers');
                done();
            });
    });
});

describe('/GET movies', () => {
    it('Should GET all the movies', (done) => {
        chai.request(server)
          .get('/movies')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
            done();
          });
    });
});

describe('/POST comment', () => {
    it('Should POST a comment', (done) => {
        chai.request(server)
            .post('/movies/5a9ee4caa65a5934dbaade52/comments')
            .send({'comment': 'Thor is my favourite hero.'})
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('movieId');
                res.body.should.have.property('comment');
                res.body.comment.should.equal('Thor is my favourite hero.');
                done();
            });
    });
});

describe('/GET comments', () => {
    it('Should GET all the comments', (done) => {
        chai.request(server)
          .get('/comments')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
            done();
          });
    });
});
