const { textPathsAryToObj, toJSONString } = require('../src/ary2json.js')
const assert = require('assert')

describe('ary2json', function () {
  it('generate a ary of text and paths to object', function () {
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
  it('generate a ary of text and paths to object (with default option)', function () {
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
  it('generate a ary of text and paths to object (has one language column)', function () {
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
})

