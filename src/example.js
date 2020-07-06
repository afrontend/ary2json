const { textPathsAryToObj, objToTextPathsAry, toJSONString } = require('./ary2json')
const obj = textPathsAryToObj([[ '로그인', 'login', 'path1', 'path2', 'path3' ]], { numberOfLanguageColumn: 2 })
console.log(toJSONString(obj))

const ko = {
    path1: {
      path2: {
        path3: '로그인'
      }
    }
  }

objToTextPathsAry(ko).forEach(function (s) {
  console.log(s)
})

