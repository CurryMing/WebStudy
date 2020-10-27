var regex_1 = /hello/;
// console.log(regex_1.test("hello"));

var regex_2 = /ab{2,5}c/g;
var str_1 = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
// console.log(str_1.match(regex_2));

var regex_3 = /a[123]b/g;
var str_2 = "a0b a1b a2b a3b a4b a5b";
// console.log(str_2.match(regex_3));

// 排除字符
var regex_4 = /e[^abc]r/g;
var str_3 = "ear ehr";
// console.log(str_3.match(regex_4));

// 构造函数
function Star(name,age){
	this.name = name
	this.age = age
}
var curry1 = new Star('Curry',31)
var curry2 = new Star('Curry',32)
Star.prototype.shoot = function(){
	console.log("logo shoot! bang!")
}
Star.sex = '男'
curry1.shoot()
curry2.shoot()

console.log(curry1.shoot === curry2.shoot)
console.log(Star.sex)
console.log(Star.prototype === curry1.__proto__)
console.log(Star.prototype);
console.log(curry1.__proto__);
console.log(Star.prototype.constructor);
console.log(curry1.__proto__.constructor);













