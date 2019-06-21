/* eslint-disable no-unused-vars, no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('./index')
const should = chai.should()
chai.use(chaiHttp)

describe('test', () => {
  it('should return HELLO string', (done) => {
    chai.request(server)
      .get('/')
      .end((_err, res) => {
        res.should.have.status(200)
        res.text.should.be.a('string')
        res.text.should.be.eql('HELLO')
        done()
      })
  })
})
