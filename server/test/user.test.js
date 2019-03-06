import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import app from '../src/index';

chai.use(chaiHttp);

describe('users', () => {
  it('should register a user', (done) => {
    chai.request(app)
      .post('/api/v1/epicmail/register')
      .send({ firstName: 'xyz', lastName: 'ggygyh', password: '7483782393' })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body).to.haveOwnProperty('status');
        expect(res.body.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('token');
        done();
      });
  });

  it('should not register a user on empty input fields', (done) => {
    chai.request(app)
      .post('/api/v1/epicmail/register')
      .send({ firstName: ' ', lastName: ' ', password: ' ' })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body).to.haveOwnProperty('status');
        expect(res.body.status).to.equal(404);
        expect(res.body).to.haveOwnProperty('message');
        expect(res.body.message).to.equal('empty input fields');
        done();
      });
  });
  it('should allow a user to signin', (done) => {
    chai.request(app)
      .post('/api/v1/epicmail/signin')
      .send({
        email: 'amadi10',
        password: 'xyzxyz',
      })
      .end((err, res) => {
        expect(res.body).to.haveOwnProperty('status');
        expect(res.body.status).to.equal(200);
        expect(res.body).to.haveOwnProperty('token');
        done();
      });
  });
});
