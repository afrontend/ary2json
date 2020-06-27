const { toObject, toCSVString } = require('csv-property')
const G = {
  numberOfLanguageColumn: 2,
  delimiter: ';'
}

// pseudo range(G.numberOfLanguageColumn)
function range(count) {
  return [...Array(count).keys()].map(item => [])
}

function getPathText(ary) {
  const langs = []
  range(G.numberOfLanguageColumn).forEach(() => {
    langs.push(ary.shift())
  })
  const path = ary.map(e => e.trim()).join(G.delimiter)
  langs.unshift(path)
  return langs
}

function getObjects(rows) {
  const langs = range(G.numberOfLanguageColumn)

  rows.forEach(row => {
    const [ path, ...textAry ] = getPathText(row)
    textAry.forEach((text, index) => {
      langs[index].push(path + G.delimiter + text)
    })
  })

  return langs.map(lang => {
    return toObject(lang, G.delimiter)
  })
}

/**
 * @param {array} rows - [[ '로그인', 'login', 'path1', 'path2', 'path3' ]]
 * @param {object} { numberOfLanguageColumn }  - a number of language column in row [ '로그인', 'login', ... ]
 * @return {array} - a array of language object
 * @example
 * textPathsAryToObj([[ '로그인', 'login', 'path1', 'path2', 'path3' ]], { numberOfLanguageColumn: 2 }) {
 *  [
 *    {
 *      path1: {
 *        path2: {
 *          path3: '로그인'
 *        }
 *      }
 *    },
 *    {
 *      path1: {
 *        path2: {
 *          path3: 'login'
 *        }
 *      }
 *    }
 *  ]
 */

function textPathsAryToObj(rows, { numberOfLanguageColumn } = { numberOfLanguageColumn: 2 }) {
  G.numberOfLanguageColumn = numberOfLanguageColumn
  return getObjects(rows)
}

function objToTextPathsAry(obj, delimiter = ';') {
  G.delimiter = delimiter
  const ary = toCSVString(obj, G.delimiter)
  const textPathsAry = []
  ary.forEach(e => {
    const tmpAry = e.split(G.delimiter)
    const first = tmpAry.pop().trim()
    textPathsAry.push(first + G.delimiter + ' ' + tmpAry.join(G.delimiter))
  })
  return textPathsAry
}

function toJSONString(obj) {
  function replacer(match, p1, p2, p3, offset, string) {
    return [p1, p2, ':', p3].join('')
  }
  return JSON.stringify(obj, null, 2).replace(/"/g,"'").replace(/(.*)'(.*)':(.*)/g, replacer)
}

module.exports = {
  textPathsAryToObj,
  objToTextPathsAry,
  toJSONString
}
