var fs = require('fs')
var path = require('path')

// let fileName = __dirname + '\\data\\hello.txt'
let fileName = path.join(__dirname, 'data', 'hello.txt')

fs.readFile(fileName, function (error, data) {
    console.log(data.toString());
})