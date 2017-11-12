const add = require('../src/add');
const expect = require('chai').expect;

describe('add 函数测试', function() {
  it('1 加 1 应等于 2', function(done) {
    setTimeout(function() {
      expect(add(1, 1)).to.be.equal(2);
      done();
    }, 2000);
  });

  it('1 加 -1 等于 0', function() {
    expect(add(1, -1)).to.be.equal(0)
  });
  it('12 加 12 等于 24', function() {
    expect(add(12, 12)).to.be.equal(24)
  })
});

// describe('加法函数测试', function() {
//   before(function() {
//     console.log('before');
//   });
//
//   beforeEach(function() {
//     console.log('beforeEach');
//   });
//
//   after(function() {
//     console.log('after');
//   });
//
//   afterEach(function() {
//     console.log('afterEach');
//   });
//
//   it('1 + 1 应等于 2', function() {
//     expect(add(1, 1)).to.be.equal(2);
//   })
// })
