const { textPathsAryToObj, toJSONString } = require('../src/ary2json.js')
const assert = require('assert')
describe('textPathsAryToObj', function () {
  it('a array of text and path to Object (with default language number option)', function () {
    const obj = textPathsAryToObj([[ '로그인', 'login', 'path1', 'path2', 'path3' ]])
    assert.deepStrictEqual(obj, [
      {
        path1: {
          path2: {
            path3: '로그인'
          }
        }
      },
      {
        path1: {
          path2: {
            path3: 'login'
          }
        }
      }
    ])
  })
  it('a array of text and path to Object (with language number option)', function () {
    const obj = textPathsAryToObj([[ '로그인', 'login', 'path1', 'path2', 'path3' ]], { numberOfLanguageColumn: 2 })
    assert.deepStrictEqual(obj, [
      {
        path1: {
          path2: {
            path3: '로그인'
          }
        }
      },
      {
        path1: {
          path2: {
            path3: 'login'
          }
        }
      }
    ])
  })
  it('a array of text and path to Object (has one language column)', function () {
    const obj = textPathsAryToObj([[ '로그인', 'path1', 'path2', 'path3' ]], { numberOfLanguageColumn: 1 })
    assert.deepStrictEqual(obj, [
      {
        path1: {
          path2: {
            path3: '로그인'
          }
        }
      }
    ])
  })
  it('null input', function () {
    const obj = textPathsAryToObj(null, { numberOfLanguageColumn: 1 })
    assert.deepStrictEqual(obj, [])
  })
  it('empty string input', function () {
    const obj = textPathsAryToObj('', { numberOfLanguageColumn: 1 })
    assert.deepStrictEqual(obj, [])
  })
  it('undefined input', function () {
    const obj = textPathsAryToObj(undefined, { numberOfLanguageColumn: 1 })
    assert.deepStrictEqual(obj, [])
  })
  it('empty array', function () {
    const obj = textPathsAryToObj([], { numberOfLanguageColumn: 1 })
    assert.deepStrictEqual(obj, [])
  })
})

describe('toJSONString', function () {
  it('Object to JSON string', function () {
    const obj =
[
  {
    path1: {
      path2: {
        path3: '로그인'
      }
    }
  },
  {
    path1: {
      path2: {
        path3: 'login'
      }
    }
  }
]
    const before =
`[
  {
    path1: {
      path2: {
        path3: '로그인'
      }
    }
  },
  {
    path1: {
      path2: {
        path3: 'login'
      }
    }
  }
]`
    const after = toJSONString(obj)
    return assert.strictEqual(before, after)
  })
})
