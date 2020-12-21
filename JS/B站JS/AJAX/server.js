// 1、引入express框架
const express = require('express');
const { request } = require('http');
// 2、创建应用对象
const app = express();
// 3、创建路由规则
    // request是对请求报文的封装
    // response是对响应报文的封装

// GET请求
app.get('/server',(request,response) => {
    // 设置响应头     // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send(request.query);
});

// 获取 json
app.get('/json-server',(request,response) => {
    // 设置响应头  // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应一个数据
    const data = {
        name: 'Fireming',
    }
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// ie 缓存
app.get('/ie',(request,response) => {
    // 设置响应头  // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应一个数据
    const data = {
        name: 'IE - sb',
    }
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// 延时响应
app.get('/delay',(request,response) => {
    // 设置响应头  // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应一个数据
    const data = {
        name: 'delay',
    }
    let str = JSON.stringify(data);
    // 设置响应体
    setTimeout(() => {
        response.send(str);
    },5000);
});

// POST请求
app.post('/server',(request,response) => {
    // 设置响应头  // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello AJAX POST');
});

// jQuery请求
app.all('/jQuery-server',(request,response) => {
    // 设置响应头  // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 数据
    let data = {
        name: 'jQuery'
    }
    // 设置响应体
    response.send(JSON.stringify(data));
});

// axios请求
app.all('/axios-server',(request,response) => {
    // 设置响应头  // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 数据
    let data = {
        name: 'axios'
    }
    // 设置响应体
    response.send(JSON.stringify(data));
});

// jsonp
app.all('/jsonp-server',(request,response) => {
    const data = {
        name: 'Fireming'
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
    // response.send('console.log("hello jsonp")');
})

// 检测用户名是否存在
app.all('/check-username',(request,response) => {
    const data = {
        exist: 1,
        msg: '用户名已存在'
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

// jQuery-jsonp
app.all('/jQuery-jsonp-server',(request,response) => {
    const data = {
        name: 'Vue',
        city: ['北京','深圳']
    }
    let cb = request.query.callback;
    let str = JSON.stringify(data);
    response.end(`${cb}(${str})`);
})

// 4、监听端口启动服务
app.listen(8000,() => {
    console.log("服务已经启动~ 输入 http://localhost:8000 进行访问");
})
