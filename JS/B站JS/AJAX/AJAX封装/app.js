const path = require('path')
// 1、引入express框架
const express = require('express');
// 2、创建应用对象
const app = express();
// 3、访问静态资源文件
app.use(express.static(path.join(__dirname)))

app.use('/html', (req, res) => {
    res.send('Hello Ajax')
})
app.use('/json', (req, res) => {
    res.send({ "name": "Fireming" })
})
// 4、监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动~ http://localhost:8000/html");
})
