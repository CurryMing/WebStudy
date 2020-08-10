window.onload = function(){
    var oUL = document.querySelector(".mainUL");
    var upBtn = document.getElementsByClassName("up");
    var downBtn = document.getElementsByClassName("down");
    
    //上移
    for(var i=0;i<upBtn.length;i++){
        upBtn[i].onclick = function(){
            var obj = this.parentNode;//上移按钮的父亲li需要移动
            if(obj == oUL.children[0]){
                alert("做事要有上限~");
                return;
            }
            var oPrev = obj.previousElementSibling;
            oUL.insertBefore(obj,oPrev);
        }
    }

    //下移
    for(var i=0;i<downBtn.length;i++){
        downBtn[i].onclick = function(){
            var obj = this.parentNode;//下移按钮的父亲li需要移动
            if(obj == oUL.children[oUL.children.length-1]){
                alert("我是有底线的~");
                return;
            }
            var oNext = obj.nextElementSibling.nextElementSibling;
            oUL.insertBefore(obj,oNext);
        }
    }
}