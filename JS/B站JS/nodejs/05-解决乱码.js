var http = require('http')
var server = http.createServer()
server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        res.end('Hello index')
    } else if (url === '/plain') {
        // 设置http响应报文头
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('Hello 世界')
    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<h3>Hello 世界<h3>')
    }
})

server.listen(3000, function () {
    console.log('Server is running...http://127.0.0.1:3000/');
})