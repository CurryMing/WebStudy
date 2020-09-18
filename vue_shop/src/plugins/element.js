import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 全局挂载（挂载到Vue的原型对象上，这样每个组件都可以通过this来访问$message）
Vue.prototype.$message = Message

