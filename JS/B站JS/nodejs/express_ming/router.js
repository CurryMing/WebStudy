// 主要负责路由判断

// 1、创建 router 对象（router 既是一个对象，也是一个函数）
var express = require("express")
var router = express.Router()

// 加载业务模块
var handler = require("./handler.js")

// 2、通过 router 对象挂载路由
// 挂载路由的时候，内部会以【键值对】的形式创建一个【路由表】，键：请求路径，值：请求时要执行的函数
router.get('/', handler.index)
router.get('/index', handler.index)
router.get('/submit', handler.submit)

// 3、返回 router
module.exports = router