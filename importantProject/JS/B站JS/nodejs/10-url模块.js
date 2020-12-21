const url = require('url')
const http = require('http')
http.createServer(function (req, res) {
    // 第二个参数为 true，则把【urlObj对象】的【query】从字符串转换为【对象】
    let urlObj = url.parse(req.url, true)
    if (req.url.startsWith('/add')) {
        console.log(urlObj);
        console.log('路径：' + urlObj.pathname);
        console.log('请求参数对象：');
        console.log(urlObj.query);
    }

    res.end()
}).listen(8080, function () {
    console.log('服务器已启动 输入 http://localhost:8080 进行访问');
})

// http://localhost:8080/add?title=unity&id=1