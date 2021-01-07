//引入mysql模块
var mysql = require('mysql');
//链接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '462139chm',
    database: 'fireming',
})
connection.connect();

//删除数据
/* var delsql = 'DELETE FROM todo_list where id = 2';
connection.query(delsql,function (err,result) {
    if(err){
        console.log('err');
        return;
    }
    console.log('----------删除-------------');
    console.log("删除数据成功！");
}) */

//增加数据
/* var addsql = 'INSERT INTO todo_list(value,id,done) VALUES(?,?,?)';
var addsqlparams = ['JavaScript',2,'false'];
connection.query(addsql,addsqlparams,function (err,result) {
    if(err){
        console.log('error');
        return;
    }
    console.log('-----------------新增成功----------------');
    console.log("增加数据成功！");
    console.log('-----------------结束----------------');
}) */


//修改数据
var modsql = 'UPDATE todo_list SET done = ? WHERE value = ? and id = ?';
var modsqlparams = ['true','Java',1];
connection.query(modsql,modsqlparams,function (err,result) {
    if(err){
        console.log('err');
        return;
    }
    console.log('--------------------------------');
    console.log("修改数据成功！");
    console.log('--------------------------------');
})

//查询数据
var sql = 'SELECT * FROM todo_list';
connection.query(sql, function (err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('-----------------查询----------------');
    console.log(result);
    console.log('-----------------查询结束----------------');
})