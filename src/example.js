const { textPathsAryToObj, toJSONString } = require('./ary2json')
const obj = textPathsAryToObj([[ '로그인', 'login', 'path1', 'path2', 'path3' ]], { numberOfLanguageColumn: 2 })
console.log(toJSONString(obj))


