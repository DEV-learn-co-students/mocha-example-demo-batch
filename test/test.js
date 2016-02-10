var expect = require('chai').expect;
var person = require('../hello_world');

describe('node sayHey', function () {
  it('must return Hello World', function(done){
    expect(person.sayHey()).to.equal('Hello World');
    done();
  })
})