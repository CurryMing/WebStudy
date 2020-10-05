window.onload = function(){
    var menu = document.querySelector(".menu");
    var h1 = document.querySelector("h1");
    document.oncontextmenu = function(e){
        h1.style.opacity = '0';
        menu.style.opacity = '1';
        menu.classList.add("open");
        menu.style.left = e.clientX + "px";
        menu.style.top = e.clientY + "px";
        return false;
    }
    document.onmousedown = function(){
        menu.style.opacity = '0';
    }
    var linkS = menu.children;
    linkS[0].onclick = function(){
        window.open("http://www.unity.cn");
    }
    linkS[1].onclick = function(){
        window.open("http://www.leetcode.com");
    }
    linkS[2].onclick = function(){
        window.location.reload();
    }
}