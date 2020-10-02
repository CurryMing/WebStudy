// 封装函数
function tween(obj, json, time, fun) {
    var speed = 0,
        curStyle = 0,
        to = 0
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
        var flag = true
        for (var name in json) {
            to = json[name]
            if (name === 'opacity') {
                curStyle = Math.round(parseFloat(getStyle(obj, name)) * 100)
            } else {
                curStyle = parseInt(getStyle(obj, name))
            }
            if (to >= curStyle) {
                speed = Math.ceil((to - curStyle) / 15)
            } else {
                speed = Math.floor((to - curStyle) / 15)
            }
            if (curStyle !== to) {
                flag = false
            }
            if (name === 'opacity') {
                obj.style[name] = (curStyle + speed) / 100
            } else {
                obj.style[name] = curStyle + speed + 'px'
            }
        }
        if (flag) {
            clearInterval(obj.timer)
            if (fun) {
                fun()
            }
            return
        }
    }, time)
}

// 封装获取【样式】的函数
function getStyle(obj, name) {
    // IE                                      // 主流  
    return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
}