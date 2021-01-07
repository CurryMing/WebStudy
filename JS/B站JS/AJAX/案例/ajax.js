function ajax(options) {
    let defaults = {
        type: 'get',
        url: '',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {},
        success: function () { },
        error: function () { }
    }
    // 对象覆盖
    Object.assign(defaults, options)
    let xhr = new XMLHttpRequest()
    let param = ''
    for (let attr in defaults.data) {
        param += attr + '=' + defaults.data[attr] + '&'
    }
    param = param.substr(0, param.length - 1)
    // 如果是【get】请求，将【请求参数】拼接在【请求地址】后面
    if (defaults.type == 'get') {
        defaults.url = defaults.url + '?' + param
    }
    xhr.open(defaults.type, defaults.url)
    // 如果是【post】请求
    if (defaults.type == 'post') {
        let contentType = defaults.header['Content-Type']
        xhr.setRequestHeader('Content-Type', contentType)
        // 如果【请求参数】是【键值对】方式，则发送使用【=、&】拼接的【请求参数】
        if (contentType === 'application/x-www-form-urlencoded') {
            xhr.send(param)
        }
        // 如果【请求参数】是【json】方式 ，则发送【json字符串】
        else if (contentType === 'application/json') {
            xhr.send(JSON.stringify(defaults.data))
        }
    } else {
        xhr.send()
    }
    // 请求完成
    xhr.onload = function () {
        let responseText = xhr.responseText
        let resContentType = xhr.getResponseHeader('Content-Type')
        if (resContentType.includes('application/json')) {
            responseText = JSON.parse(responseText)
        }
        if (xhr.status == 200) {
            defaults.success(responseText, xhr)
        } else {
            defaults.error(responseText, xhr)
        }
    }
}