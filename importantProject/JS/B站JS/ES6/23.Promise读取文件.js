// 1. 引入 fs 模块
const fs = require('fs');

// 2. 调用方法读取文件
/* fs.readFile('./Files/Language.md',(err,data) => {
    // 如果失败，则抛出错误
    if(err) throw err;
    // 如果成功，则输出内容
    console.log(data.toString());
}); */

// 3. 使用Promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile('./Files/Language.txt',(err,data) => {
        // 如果失败，改变Promise的状态
        if(err) reject(err);
        // 如果成功，则输出内容
        resolve(data);
    });
});
p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log('读取失败！！');
});

// node 23.Promise读取文件.js