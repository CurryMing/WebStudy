// 封装函数
function tween(obj,name,to,time,fun){
	var speed = 0
	var cur = 0
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		if(name === 'opacity'){
			cur = Math.round(parseFloat(getStyle(obj,name)) * 100) 
		}else {
			cur = parseInt(getStyle(obj,name))
		}
		if(to >= cur){
			speed = Math.ceil((to-cur) / 30)
		}else{
			speed = Math.floor((to-cur) / 30)
		}
		// 结束动画
		if(cur === to){
			clearInterval(obj.timer)
			if(fun){
				fun()
			}
			return
		}
		if(name === 'opacity'){
			obj.style[name] = (cur + speed) / 100
		}else {
			obj.style[name] = cur + speed + 'px'
		}
	},time)
}

// 封装获取【样式】的函数
function getStyle(obj,name) {
	      // IE                                      // 主流  
	return obj.currentStyle ? obj.currentStyle[name] : window.getComputedStyle(obj,false)[name];
}