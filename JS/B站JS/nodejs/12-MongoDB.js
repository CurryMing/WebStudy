// 引入模块
const { MongoClient } = require('mongodb');
// 数据库连接的地址
const url = 'mongodb://localhost:27017';
// 要操作的数据库
const dbName = 'test';
// 实例化MongoClient，参数：链接地址
const client = new MongoClient(url, { useUnifiedTopology: true })
// 链接数据库
client.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据库链接成功！');
    let db = client.db(dbName);

    // 插入数据
    db.collection('students').insertOne({ name: 'ming', "age": 20, gender: '女' }, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('增加数据成功！');
        console.log(result);

        // 关闭数据库
        client.close()
    })

    // 修改数据
    /* db.collection('students').updateOne({ name: 'neminrao' }, { $set: { age: 21 } }, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('修改数据成功！');
        console.log(result);
        client.close()
    }) */

    // 删除数据
    /* db.collection('students').deleteOne({ name: 'ming' }, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('删除一条数据成功！');
    }) */

    // 查找数据
    db.collection('students').find({}).toArray((err, data) => {
        console.log(data);
        // 关闭数据库
        client.close()
    })
})