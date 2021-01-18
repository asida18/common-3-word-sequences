var assert = require('assert');
var expect = require('chai').expect;
var main = require('../index.js');


describe('readFiles method', function() {

  context('without arguments', function () {
    it('should return []', function () {
      expect(main.readFiles()).to.eql([])
    })
  })

  context('argument list with 1 values', function () {
    it('should return console log results', function () {
      expect(main.readFiles(['test.txt'])).to.equal(undefined);
    })
  })

  context('argument list with 2 values', function () {
    it('should return console log results', function () {
      expect(main.readFiles(['test.txt', 'hello.txt'])).to.equal(undefined);
    })
  })
})

describe('retrieveNAmount method', function() {
  context('Array list with over 20 results', function () {
    it('should return only the first 10', function () {
      expect(main.retrieveNAmount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10)).to.eql([1,2,3,4,5,6,7,8,9,10])
    })
  })
})

describe('groupText method', function() {
  context('with text passed in', function () {
    it('not care for case insensitivity, punctuation', function() {
      expect(main.groupText('This is A test. THIS IS A TeSt. Shouldn"t it be should not? And I LOVE SANDWICHES!!! I love sandwiches too'))
    })
  })
})