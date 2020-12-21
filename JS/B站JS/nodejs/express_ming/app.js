// app.js 模块负责：启动服务
// 1、加载 express 模块
var express = require("express")
// 加载 config.js 模块
var config = require("./config.js")
// 加载路由模块
var router = require("./router.js")

// 2、创建 app 对象
var app = express()
// 3、注册路由
// 设置 app 与 router 相关联
app.use('/',router)

// 4、启动服务
app.listen(config.port,function(){
    console.log('http://localhost:' + config.port);
})