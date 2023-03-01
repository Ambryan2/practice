const path = require('path')

console.log(path.sep)

// joins the path
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//base url
const base = path.basename(filePath)
console.log(base)

//get absolute path
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)

