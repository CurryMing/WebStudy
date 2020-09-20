window.onload = function(){
    var wrapper = document.querySelector(".wrapper");
    var imgList = wrapper.querySelectorAll(".slide");
    var navigation = document.querySelector(".navigation");
    var right = navigation.querySelector(".right");
    var left = navigation.querySelector(".left");

    imgList.forEach(img => {
        img.addEventListener("mouseenter",() => {
            img.classList.add("moveUp");
        });
        img.addEventListener("mouseleave",() => {
            img.classList.remove("moveUp");
        });
    });

    var index = 0;
    navigation.addEventListener("click",(ev) => {
        var target = ev.target;
        
        if(target.tagName == "A"){
            if(target.className == "left"){
                index--;
                if(index<=0) index = 0;
                wrapper.style.left = `${-index*240}px`;
            }else{
                index++;
                if(index>=5) index = 5;
                wrapper.style.left = `${-index*240}px`;
            }
        }
        if(index<=0) left.style.display = "none";
        else left.style.display = "block";

        if(index>=5) right.style.display = "none";
        else right.style.display = "block";
    });
}