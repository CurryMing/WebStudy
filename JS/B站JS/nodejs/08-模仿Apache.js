const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('mime')

const server = http.createServer()

server.on('request', function (req, res) {
    let url = req.url
    url = url === '/' ? 'index.html' : url;
    const publicDir = path.join(__dirname, 'public')
    let filename = path.join(publicDir, url)

    // 获取静态资源
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.setHeader('Content-Type', 'text/plain;charset=utf-8')
            res.end('文件不存在 404 Not Found');
            return
        }
        res.setHeader('Content-Type', mime.getType(filename))
        res.end(data)
    })
})

server.listen(3000, function () {
    console.log('服务启动了 http://localhost:3000');
})
