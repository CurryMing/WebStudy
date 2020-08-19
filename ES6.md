## ES6语法
> 箭头函数
+ 箭头函数的this对象是静态的
```javascript
let fun2 = function(){
  console.log(this.name)
}
let fun22 = () => {
  console.log(this.name)
}
window.name = 'oMing'
// fun2()
// fun22()
let people = {name: 'Vue'}
fun2.call(people)
// 'this是静态的'
fun22.call(people)
```
- - -
+ 箭头函数的实践和应用场景
 1、点击div1，延迟改变颜色
	- 普通函数
```javascript
let div1 = document.getElementById('div1')
div1.addEventListener('click',function(){
		let _this = this
		setTimeout(function(){
		_this.style.background = 'pink'
		},2000)
})
```
	- 箭头函数
```javascript
let div1 = document.getElementById('div1')
div1.addEventListener('click',function(){
		setTimeout(() => {
		this.style.background = 'pink'
		},2000)
})
```
 2、从数组返回偶数
	- 普通函数
```javascript
const arr = [1,6,8,9,12]
console.log(arr.filter(function(item){
	if(item % 2 == 0) return true
	else return false
}))
```
	- 箭头函数
```javascript
const arr = [1,6,8,9,12]
console.log(arr.filter(item => item % 2 == 0))
```
- - -
> 扩展运算符
```javascript
const arr3 = ['unity','google','vue']
function web(){
	// arguments 用来保存实参
	console.log(arguments)
}
web(...arr3)
//数组的合并
const oVuex = ['v','u','e','x']
const oVue_cli = ['c','l','i']
console.log([...oVuex,...oVue_cli])
//数组的克隆
const oVue = ['v','u','e']
const oVueClone = [...oVue]
//将伪数组变为真正的数组
let divs = document.querySelectorAll('div')
console.log([...divs])
```
- - -
> rest参数
```javascript
--------------------ES5
function data(){
  console.log(arguments)//类型是一个对象
}
data('unity','oming','vuex')
--------------------ES6
function data(...args){
  console.log(args)//类型是一个数组
}
data('unity','oming','vuex')
function data2(a,b,...args){
  console.log(a)
  console.log(b)
  console.log(args)
}
data2(1,2,3,4,5,6)
```
