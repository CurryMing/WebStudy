# WebProject
## 学习笔记
+ *oMing*
  - Vue
  - jQuery

> Vue
>> 指令
>>> v-on:
```
<button v-on:click='Show'>   </button>
```
- - -
>>> v-bind:
```
<h1 v-bind:gmsg='msg'>    </h1>
```
- - -

>Vuex
>> state  **（用于存储全局数据）**
+ 组件访问 state 中的全局数据的方式1：
```javascript
this.$store.state.全局数据
```
+ 组件访问 state 中的全局数据的方式2：
```javascript
// 组件中按需导入 mapState 函数
import { mapState } from 'vuex'
export default {
	name: 'app',
	computed: {
	// 将全局数据 映射 为计算属性
	...mapState(['inputValue'])
	},
}
```
```
<p>{{ inputValue }}</p>
```
- - -
>> mutations  **（用于变更store存储的数据）**
+ 调用mutations的方式1：
```javascript
// 在store中定义
mutations: {
	add(state,param1){
		state.count = param1
	}
}
// 在组件中调用
this.$store.commit('add',param1)
```
+ 调用mutations的方式2：
```javascript
import { mapMutations } from 'vuex'
// 将指定的mutations函数，映射为组件的methods函数
methods: {
	...mapMutations: ['add'],
	fun(){
		this.add()
	}
}
```


































## **坚持就是胜利！**