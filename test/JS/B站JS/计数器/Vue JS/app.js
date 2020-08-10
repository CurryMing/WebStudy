var vm = new Vue({
    el: '#counter',
    data: {
        count: 0,
    },
    methods: {
        add(){
            this.count++
        },
        subtract(){
            this.count--
        }
    }
})
console.log(vm.$data)