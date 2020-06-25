[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
# ary2json
Convert text array to JSON

## Install
```sh
npm install ary2json
```

## Usage
```javascript
const { textPathsAryToObj, toJSONString } = require('ary2json')
const obj = textPathsAryToObj([[ '로그인', 'login', 'path1', 'path2', 'path3' ]], 2)
console.log(toJSONString(obj))
```

## License
MIT © Bob Hwang




