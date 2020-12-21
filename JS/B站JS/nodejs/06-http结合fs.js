var http = require('http')
var server = http.createServer()
var fs = require('fs')

server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html charset=utf-8')
        fs.readFile('./resource/index.html', function (err, data) {
            if (err) console.log("加载文件失败！");
            else res.end(data)
        })
    } else if (url === '/shooter') {
        res.setHeader('Content-Type', 'image/jpeg')
        fs.readFile('./resource/SurvivalShooter.jpg', function (err, data) {
            if (err) console.log("加载文件失败！");
            else res.end(data)
        })
    }
})

server.listen(3000, function () {
    console.log('Server is running... http://127.0.0.1:3000/');
})