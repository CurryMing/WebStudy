window.onload = function () {
    // 单例设计模式
    let bannerModule = (function () {
        let container = document.querySelector(".container");
        wrapper = document.querySelector(".wrapper");
        pagination = document.querySelector(".pagination");
        navigation = document.querySelector(".navigation");
        paginationList = pagination.querySelectorAll("div"); // 获取到的不是一个数组

        let step = 0,
            interval = 2000,
            autoTimer = null;
        function MoveRight() {
            step++;
            if (step >= 5) {
                wrapper.style.transitionDuration = "0ms";
                wrapper.style.left = `0px`;
                step = 0;
                wrapper.offsetLeft; // 中断浏览器渲染队列
            }
            wrapper.style.transitionDuration = "300ms";
            wrapper.style.left = `${-step * 220}px`;
            paginationFocus();
        }
        function MoveLeft() {
            step--;
            if (step < 0) {
                wrapper.style.transitionDuration = "0ms";
                wrapper.style.left = `${-4 * 220}px`;
                step = 3;
                wrapper.offsetLeft; // 中断浏览器渲染队列
            }
            wrapper.style.transitionDuration = "300ms";
            wrapper.style.left = `${-step * 220}px`;
            paginationFocus();
        }

        function paginationFocus() {
            let tmp = step;
            tmp === 4 ? (tmp = 0) : null;
            // [].forEach.call()是一种快速的方法访问forEach，并将【空数组】的this换成想要遍历的list
            [].forEach.call(paginationList, (item, index) => {
                item.className = tmp === index ? "active" : "";
            });
        }

        return {
            init() {
                autoTimer = setInterval(MoveRight, interval);
                // 鼠标移入，停止播放
                container.onmouseenter = function () {
                    clearInterval(autoTimer);
                    navigation.classList.add("open");
                };
                // 鼠标移出，继续播放
                container.onmouseleave = function () {
                    autoTimer = setInterval(MoveRight, interval);
                    navigation.classList.remove("open");
                };
                // 鼠标点击，控制播放
                navigation.onclick = function (ev) {
                    let target = ev.target;
                    //如果点击的是<a>标签
                    if (target.tagName == "A") {
                        //点击左按钮
                        if (target.className == "left") {
                            MoveLeft()
                        } else {
                            MoveRight();
                        }
                    }
                };
            },
        };
    })();
    bannerModule.init();
};
