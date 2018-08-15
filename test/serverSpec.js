  // TODO: Your code here
  var DB = require('../database/index.js')
  var assert = require('assert');
  var mongoose = require('mongoose');
  var chai = require('chai');
  var expect = chai.expect;
  describe('Cat Model', function () {

    it('should be a Mongoose model', function () {
        expect(new DB.Cat()).to.be.instanceOf(mongoose.Model);
      });
    it('should have a schema', function () {
        expect(DB.Cat.schema).to.exist;
      });
      it('should have a `Cat Name` property that is a string', function () {
          expect(DB.Cat.schema.paths.catName.options.type.name).to.equal('String');
        });
      it('should have a `Cat Name` property', function () {
        expect(DB.Cat.schema.paths.catName).to.exist;
      });
      it('should have a `ownerEmail` property that is a string', function () {
          expect(DB.Cat.schema.paths.ownerEmail.options.type.name).to.equal('String');
        });
      it('should have a `ownerEmail` property', function () {
        expect(DB.Cat.schema.paths.ownerEmail).to.exist;
      });
      it('should have a `imageUrl` property that is a string', function () {
          expect(DB.Cat.schema.paths.imageUrl.options.type.name).to.equal('String');
        });
      it('should have a `imageUrl` property', function () {
        expect(DB.Cat.schema.paths.imageUrl).to.exist;
      });
      it('should have a `adoptionMessage` property that is a string', function () {
          expect(DB.Cat.schema.paths.adoptionMessage.options.type.name).to.equal('String');
        });
      it('should have a `adoptionMessage` property', function () {
        expect(DB.Cat.schema.paths.adoptionMessage).to.exist;
      });

  });
     describe('POST/GET:', function () {
  it('should respond with JSON array', function(done) {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Object);
      done();
    });
    });
  it('should respond with redirect on post', function(done) {
      request(app)
        .post('/')
        .send({"Cat":{"catName":"cuteCat"}})
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) done(err);
          res.body.should.have.property('Cat');
          res.body.participant.should.have.property('catName', 'cuteCat');

           });
});
});
