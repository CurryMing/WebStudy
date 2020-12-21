var fs = require('fs')

let fileName = __dirname + '\\data\\hello.txt'

fs.readFile(fileName, function (error, data) {
    console.log(data.toString());
})

fs.readFile('./data/hello.txt', 'utf8', function (error, data) {
    console.log(data);
})

// 解决文件读取中 ./ 相对路径问题
// 解决：__dirname  __filename
// __dirname: 当前正在执行的js文件所在的目录
// __filename: 当前正在执行的js文件的完整路径

// D:\CodeDesignProgram\网页设计\html_test\importantProject\JS\B站JS\nodejs
/*console.log(__dirname); */
// D:\CodeDesignProgram\网页设计\html_test\importantProject\JS\B站JS\nodejs\01-读取文件.js
/*console.log(__filename);*/