function getStyle(obj, name) {
    return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
}

//定时器
function tween(obj, name, target, time) {
    var start = parseInt(getStyle(obj, name));
    var dis = target - start;
    var count = Math.round(time / 30);
    var n = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        n++;
        var cur = start + dis * n / count;
        if (name === 'opacity') {
            obj.style[name] = cur;
            obj.style.filter = 'alpha(opacity:' + cur * 100 + ')';
        } else {
            obj.style[name] = cur + 'px';
        }

        if (n === count) {
            clearInterval(obj.timer);
        }
    }, 30);
}
