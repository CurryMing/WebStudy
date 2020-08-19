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
>>> v-bind:  **（给元素的 ++属性++ 绑定数据）**
```
<h1 v-bind:gmsg='msg'>{{ gmsg }}</h1>
```
- - -
>>> {{}}、v-text=''、v-html=''**（给 ++元素++ 绑定数据）**
```
<p>{{ data }}</p>
<p v-text='data'></p>
<p v-html='data'></p>
```

>Vuex
>> ++ state ++  **（用于存储全局数据）**
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
>> ++ mutations ++  **（用于变更store存储的数据，不要在mutations中进行异步操作）**
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
export default{
	methods: {
		...mapMutations(['add']),
		fun(){
			this.add()
		}
	}
}
```
- - -
>> ++ getters ++  **（用于对Store中的数据加工处理形成新的数据）**
+ 定义getters
```javascript
getters: {
	showNum: state => {
		return '当前最新的数据是: ' + state.count
	}
}
```
+ 使用getters
 - 方式1：
```javascript
this.$store.getters.名称
```
 - 方式2：
```javascript
import { mapGetters } from 'vuex'
export default {
		name: 'app',
		computed: {
			...mapGetters(['showNum'])
		}
}
```
```
<p>{{ showNum }}</p>
```
- - -
>> ++ actions ++  **（用于执行异步操作）**
+ 定义
```javascript
mutations: {
	add(state){
		state.count++
	}
}
actions: {
	addAsync(context){
		setTimeout(() => {
			context.commit('add')
		},1000)
	}
}
```
+ 触发
 - 方式1：
```javascript
this.$store.dispatch('addAsync')
```
 - 方式2：
```javascript
import { mapActions } from 'vuex'
export default {
		name: 'app',
		methods: {
			...mapActions(['addAsync']),
			// this.addAsync()
		}
}
```
```
<button @click='addAsync'></button>
```
- - -

> vue-router


































## **坚持就是胜利！**