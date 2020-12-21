// 将自定义的组件包装成一个“插件”
import Vue from 'vue'
import loading from './Loading'

export default{
  install: function(Vue,options){
    // Vue.component(loading.name,loading)
    
    // 1、根据组件生成一个构造函数
    let loadingConstructor = Vue.extend(loading)
    // 2、根据构造函数构建实例对象
    let loadingInstance = new loadingConstructor()
    // 3、随便创建一个标签（元素）
    let oDiv = document.createElement('div')
    // 4、将创建好的标签元素添加到body中
    document.body.appendChild(oDiv)
    // 5、将创建好的实例对象挂载到创建好的标签元素上
    loadingInstance.$mount(oDiv)

    if((options && options.title !== null) && options.title !== undefined){
      loadingInstance.title = options.title
    }

    // 添加全局方法
    Vue.showLoading = function(){
      loadingInstance.isShow = true
    }
    Vue.hideLoading = function(){
      loadingInstance.isShow = false
    }

    // 添加实例方法
    Vue.prototype.$showLoading = function(){
      loadingInstance.isShow = true
    }
    Vue.prototype.$hideLoading = function(){
      loadingInstance.isShow = false
    }
  }
}