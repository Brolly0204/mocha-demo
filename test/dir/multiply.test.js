const multiply = require('../../src/multiply');
const expect = require('chai').expect;

describe('乘法函数测试', function() {
  it('1 乘 1 等于 1', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  })
})
