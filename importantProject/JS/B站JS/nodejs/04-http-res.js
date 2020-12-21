// 导入http模块
var http = require('http')

// 返回一个server实例
var server = http.createServer()

// 客户端发起请求，触发这个函数
// 两个参数： Request：请求对象（用来获取客户端的一些请求信息，例如请求路径）
//           Response：响应对象（用来给客户端发送一些响应信息，例如）
server.on('request', function (request, response) {
    var url = request.url
    console.log('收到客户端的请求~请求路径是：' + url);
    // IP地址用来定位计算机
    // 端口号用来定位具体的应用程序
    // 所有需要联网的应用程序都占用一个端口号
    console.log('请求我的客户端的端口号是：' + request.socket.remotePort);
    console.log('请求我的客户端的IP地址是：' + request.socket.remoteAddress);
    // 给客户端发送响应数据
    // 需求：当请求路径不同的时候，响应不同的结果
    // /login 登录 /register 注册 
    if (url === '/') {
        response.write('nodejs index page')
        response.end()
    } else if (url === '/login') {
        response.end('Login')
    } else if (url === '/register') {
        response.end('Register')
    } else if (url === '/products') {
        let products = [
            {
                name: 'OnePlus 8T',
                price: 3699
            },
            {
                name: 'OnePlus 8',
                price: 4399
            }
        ]
        response.end(JSON.stringify(products))
    } else {
        response.end('404 NotFound')
    }
})

// 绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动成功,可以通过 http://127.0.0.1:3000/ 来进行访问');
})