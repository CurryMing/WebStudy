import Vue from 'vue'
import todolist from './ToDoList'
import {Input,Button,Checkbox,Icon} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Icon)


export default{
  install: function(Vue){
    let todolistConstrustor = Vue.extend(todolist)
    let todolistInstance = new todolistConstrustor()
    let oDiv = document.createElement('div')
    document.body.appendChild(oDiv)
    todolistInstance.$mount(oDiv)
  }
}