window.onload = function(){

    var sT = document.documentElement.scrollTop || document.body.scrollTop;
    var sL = document.documentElement.scrollLeft || document.body.scrollLeft;

    let rect = document.querySelector(".rect");
    var isDrag = false;

    var disX = 0,disY = 0;

    var newRect = null;

    rect.addEventListener("mousedown",(ev) => {
        var e = event || ev;
        // console.log("clientX: "+e.clientX);
        // console.log("clientY: "+e.clientY);
        disX = e.clientX - rect.offsetLeft;
        disY = e.clientY - rect.offsetTop;
        // console.log("disX: "+disX);
        // console.log("disY: "+disY);
        
        newRect = rect.cloneNode(true);
        newRect.removeAttribute('id');
        newRect.style.opacity = 0.5;
        rect.parentNode.appendChild(newRect);

        //防止鼠标速度过快，物体跟不上
        document.onmouseup = function() {
            rect.style.left = newRect.offsetLeft + "px";
            rect.style.top = newRect.offsetTop + "px";
            if(newRect!=null){
                rect.parentNode.removeChild(newRect);
            }
            document.onmousemove = null;
            document.onmouseup = null;
        }
        document.onmousemove = function(ev) {
            var e = event || ev;

            var l = e.clientX - disX;
            var t = e.clientY - disY;
            if(l < 0 || l<50){
                l = 0;
            }else if(l > document.documentElement.clientWidth - rect.offsetWidth || l>document.documentElement.clientWidth - rect.offsetWidth - 50){
                l = document.documentElement.clientWidth - rect.offsetWidth;
            }
            if(t < 0 || t<50){
                t = 0;
            }else if(t > document.documentElement.clientHeight - rect.offsetHeight || t > document.documentElement.clientHeight - rect.offsetHeight - 50){
                t = document.documentElement.clientHeight - rect.offsetHeight;
            }

            newRect.style.left = l + sL + "px";
            newRect.style.top = t + sT + "px";
            
            // console.log("rect.style.left: "+rect.style.left);
            // console.log("rect.style.right: "+rect.style.right);
        
        }

        return false;
    });
    
}