// 全局过滤器
Vue.filter("dateFormat",function(dataStr,pattern=""){
    var dt = new Date(dataStr)
    // yyyy-mm-dd
    var y = dt.getFullYear()
    var m = (dt.getMonth() + 1).toString().padStart(2,"0")
    var d = dt.getDate().toString().padStart(2,"0")

    if(pattern.toLowerCase() === "yyyy--mm--dd"){
        return `${y}-${m}-${d}`
    }else{
        var h = dt.getHours().toString().padStart(2,"0")
        var min = dt.getMinutes().toString().padStart(2,"0")
        var s = dt.getSeconds().toString().padStart(2,"0")
        return `${y}-${m}-${d} ${h}:${min}:${s}`
    }
})

// 自定义全局按键修饰符
Vue.config.keyCodes.enter = 113

// 使用 Vue.directive() 定义全局的 指令
Vue.directive("focus",{
    bind: function(el){
        
    },
    inserted: function(el){
        el.focus()
    },
    update: function(){

    }
})
Vue.directive("color",{
    bind: function(el,binding){
        // el.style.color = "red"
        el.style.color = binding.value
    }
})

new Vue({
    el: ".app",
    data: {
        id: "",
        name: "",
        keyWord: "",
        isExited: false,
        list:[
            {id: 1,name: "玛莎拉蒂",ctime: new Date()},
            {id: 2,name: "特斯拉",ctime: new Date()},
        ],
    },
    methods: {
        add(){
            this.list.forEach(item => {
                if(item.id == this.id){
                    this.isExited = true
                }
            })
            if(this.id == "" || this.name=="" || this.isExited){
                alert("添加失败！")
                this.id = this.name = ""
                return
            }
            var car = {id: this.id,name: this.name,ctime: new Date()}
            this.list.push(car)
            this.id = this.name = ""
            alert("添加成功！")
        },
        del(id){
            // this.list.some((item,i) => {
            //     if(item.id == id){
            //         this.list.splice(i,1)
            //         // 在数组的some方法中，如果return true，就会立即终止这个数组的后续循环
            //         return true
            //     }
            // })

            var index = this.list.findIndex(item => {
                if(item.id == id){
                    return true
                }
            })
            this.list.splice(index,1)
        },
        search(keyWord){
            // var newList = []
            // this.list.forEach(item => {
            //     if(item.name.indexOf(keyWord) != -1){
            //         newList.push(item)
            //     }
            // });
            // return newList
            return this.list.filter(item => {
                if(item.name.includes(keyWord)){
                    return item
                }
            })
        }
    },
    // 自定义私有 指令
    directives: {
        "fontweight": function(el,binding){
            el.style.fontWeight = binding.value
        }
    },
})

new Vue({
    el: ".app2",
    data: {
        h1msg: new Date()
    },
    // 
    filters: {
        dateFormat: function(dataStr,pattern=""){
            var dt = new Date(dataStr)
            // yyyy-mm-dd
            var y = dt.getFullYear()
            var m = (dt.getMonth() + 1).toString().padStart(2,"0")
            var d = dt.getDate().toString().padStart(2,"0")

            if(pattern.toLowerCase() === "yyyy--mm--dd"){
                return `${y}-${m}-${d}`
            }else{
                var h = dt.getHours().toString().padStart(2,"0")
                var min = dt.getMinutes().toString().padStart(2,"0")
                var s = dt.getSeconds().toString().padStart(2,"0")
                return `${y}-${m}-${d} ${h}:${min}:${s}~~~`
            }
        }
    },
    //简写的自定义的 私有指令
    directives: {
        "fontsize": function(el,binding){
            el.style.fontSize = parseInt(binding.value) + "px"
        }
    } ,
})