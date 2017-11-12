const getData = require('../src/api');
const expect = require('chai').expect;

describe('异步请求测试', function() {
  it('异步请求返回一个对象', function() {
    return getData().then(res => {
      expect(res.data).to.be.an('object');
    })
  })
})
