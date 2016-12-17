// const {expect} = require('chai');
const {describe, it, afterEach, beforeEach} = require('mocha');
var request = require('supertest');

describe('/api/shoes', () => {
  var server;
  beforeEach(function () {
    server = require('../bin/www');
  });

  afterEach(function () {
    server.close();
  });

  it('responds to /', done => {
    request(server)
    .get('/')
    .expect(200, done);
  });
});
