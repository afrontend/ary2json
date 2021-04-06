
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# ary2json

* Convert text array to JSON
* Convert JSON to text array

## Install

```sh
npm install ary2json
```

## Usage (text array to JSON)

```javascript
const { textPathsAryToObj, objToTextPathsAry, toJSONString } = require('ary2json')
const obj = textPathsAryToObj([[ '로그인', 'login', 'path1', 'path2', 'path3' ]], {
  numberOfLanguageColumn: 2
})
console.log(toJSONString(obj))
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
```

## Usage (JSON to text array)

```javascript
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
로그인; path1; path2; path3
```

## License

MIT © [Bob Hwang](https://afrontend.github.io)
