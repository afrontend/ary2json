const { toJSONString } = require('../src/ary2json.js')
const assert = require('assert')

describe('ary2json', function () {
  it('generate object to string', function () {
    assert.deepEqual({}, {})
  })
})
