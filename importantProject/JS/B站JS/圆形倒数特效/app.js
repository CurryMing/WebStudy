new Vue({
    el: '#app',
    data: {
        size: 120,
        stroke: 10,
        percentage: 100,
        timer: null,
        seconds: 5,
        isAnimating: false,
    },
    computed: {
        radius(){
            return (this.size / 2) - (this.stroke / 2);
        },
        circleOffset(){
            return this.size / 2;
        },
        circumference(){
            return this.radius * 2 * Math.PI;
        },
        progress(){
            return this.circumference - this.circumference * this.percentage / 100;
        },
        countdown(){
            return Math.ceil(this.seconds * this.percentage / 100);
        }
    },
    methods: {
        animate(){
            this.isAnimating = true;
            this.timer = setInterval(()=>{
                this.percentage -= 1/10;
                if(this.percentage <= 0){
                    clearInterval(this.timer);
                    this.isAnimating = false;
                    this.percentage = 100;
                }
            },this.seconds)
        }
    }

})