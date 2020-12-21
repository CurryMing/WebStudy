var fs = require('fs')

fs.writeFile('./data/hello.txt', '你好，我是帅哥~', function (error) {
    console.log('文件写入成功');
})

let msg = 'unity'
fs.appendFile('./data/hello.txt',msg,function(err){
    console.log('文件写入成功');
})