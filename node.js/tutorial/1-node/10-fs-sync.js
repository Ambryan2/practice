//this same as fs.readFilesync
const {readFileSync, writeFileSync} = require('fs')

console.log('start') //demonstrate difference between sync and async

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


// write file creates new file with content
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} //this lets it make a new line each time
)

console.log('done with task')
console.log('starting next task')

console.log(first, second)