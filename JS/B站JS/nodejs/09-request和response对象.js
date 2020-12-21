// 常用的 【request】 对象的属性
// 1、request.headers 返回的是一个对象,对象中保存的是所有请求报文头
// 2、request.rawHeaders 返回的是一个数组,数组中保存的是请求报文头的字符串
// 3、request.httpVersion
// 4、request.method
// 5、request.url

// 常用的 【response】 对象的属性
// 1、response.write()
// 2、response.end()
// 3、response.setHeader()
// 4、response.statusCode 设置【http响应状态码】
// 5、response.statusMessage 设置响应状态码的消息
// 6、response.writeHead()

const http = require('http')

const server = http.createServer()
server.on('request',function(req,res){
    // res.statusCode = 404
    // res.statusMessage = 'Not Found'
    // console.log(req.headers);

    // res.writeHead(200,'OK',{
    //     'Content-Type': 'text/plain;charSet=utf-8'
    // })

    res.write('index ')

    res.end('OVER')
})
server.listen(9090,function(){
    console.log('服务已启动 http://localhost:9090');
})