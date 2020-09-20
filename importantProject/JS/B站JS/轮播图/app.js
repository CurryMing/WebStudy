window.onload = function(){
    // 单例设计模式
    let bannerModule = (function(){

        let container = document.querySelector(".container");
        wrapper = document.querySelector(".wrapper");
        pagination = document.querySelector(".pagination");
        navigation = document.querySelector(".navigation");
        paginationList = pagination.querySelectorAll("div");

        let step = 0,interval = 2000,autoTimer = null;
        function autoMove(){
            step++;
            if(step>=5){
                wrapper.style.transitionDuration = "0ms";
                wrapper.style.left = `0px`;
                step=1;
                wrapper.offsetLeft;
            }
            wrapper.style.transitionDuration = "300ms";
            wrapper.style.left = `${-step*220}px`;
           paginationFocus();
        }

        function paginationFocus(){
            let tmp = step;
            tmp === 4 ? tmp = 0 : null;
            [].forEach.call(paginationList,(item,index) => {
                item.className = tmp===index ? "active" : "";
            });
        }

        return{
            init(){
                autoTimer = setInterval(autoMove,interval);
                container.onmouseenter = function(){
                    clearInterval(autoTimer);
                    navigation.classList.add("open");
                }
                container.onmouseleave = function(){
                    autoTimer = setInterval(autoMove,interval);
                    navigation.classList.remove("open");
                }
                navigation.onclick = function(ev){
                    let target = ev.target;
                    //如果点击的是<a>标签
                    if(target.tagName=="A"){
                        //点击左按钮
                        if(target.className=="left"){
                            step--;
                            if(step<0){
                                wrapper.style.transitionDuration = "0ms";
                                wrapper.style.left = `${-4*220}px`;
                                step=3;
                                wrapper.offsetLeft;
                            }
                            wrapper.style.transitionDuration = "300ms";
                            wrapper.style.left = `${-step*220}px`;
                            paginationFocus();
                        }else{
                            autoMove();
                        }
                    }
                }
            }
        };
    })();
    bannerModule.init();    
}
