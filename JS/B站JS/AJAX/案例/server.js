const path = require('path')
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '462139chm',
    database: 'fireming',
})
connection.connect();
// 1、引入express框架
const express = require('express');
// 2、创建应用对象
const app = express();
// 3、访问静态资源文件
app.use(express.static(path.join(__dirname)))

app.get('/verifyEmailAdress', (req, res) => {
    // 查询数据
    var sql = 'SELECT * FROM emails where email=?';
    var modsqlparams = [`${req.query.email}`];
    connection.query(sql, modsqlparams, function (err, result) {
        if (err) {
            res.status(400).send({ message: '查询失败！' })
            return;
        }
        // 在数据库中查询到数据，表明存在这个邮箱，表明此邮箱【已注册】
        // 设置响应状态码为【400】，ajax就会执行error回调函数
        if (result.length !== 0) {
            res.status(400).send({ message: '该邮箱已注册！' })
            return;
        }
        res.send({ message: '该邮箱还没注册~' })
    })
})
app.get('/addEmail', (req, res) => {
    // 插入数据
    var insertsql = 'insert into emails (email) values(?)';
    var insertsqlparams = [`${req.query.email}`];
    connection.query(insertsql, insertsqlparams, function (err, result) {
        if (err) {
            res.status(400).send({ message: '注册失败！' })
            return;
        }
        res.send({ message: '恭喜！邮箱注册成功~' })
    })
})
// 4、监听端口启动服务
app.listen(3000, () => {
    console.log("服务已经启动~ http://localhost:3000/验证电子邮箱唯一性.html");
})
