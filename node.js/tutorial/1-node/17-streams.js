const {createReadStream} = require('fs')

const stream = createReadStream('../content/big.txt', { highWaterMark: 90000, encoding: 'utf8', });

//default 64k
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt',{ highWaterMark: 90000})
//const stream = createReadStream('./content/big.txt',{ encoding: 'utf8' })

//This allows data to be sent by chunks instead of one large file. The benefit being it is easier for users to load 

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{console.log(err)})