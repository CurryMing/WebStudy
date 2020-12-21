// 导入http模块
var http = require('http')

// 返回一个server实例
var server = http.createServer()

// 客户端发起请求，触发这个函数
server.on('request',function(){
    console.log('收到客户端的请求~');
})

// 绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功,可以通过 http://127.0.0.1:3000/ 来进行访问');
})