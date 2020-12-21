var startX,startWidth
startWidth = localStorage.getItem("scalable_width") || getScalableDivWidth();
document.querySelector(".scalable").style.width = startWidth + "px";

document.querySelector(".scalable").addEventListener("mousedown",startDrag);

function startDrag(e){
    startX = e.clientX;
    startWidth = getScalableDivWidth();
    // 鼠标拖拽
    document.documentElement.addEventListener("mousemove",onDrag);
    // 鼠标松开
    document.documentElement.addEventListener("mouseup",stopDrag);
}
function onDrag(e){
    let newWidth = startWidth + e.clientX - startX;
    document.querySelector(".scalable").style.width = newWidth + "px";
}
function stopDrag(e){
    localStorage.setItem("scalable_width",getScalableDivWidth());
    // 移除事件
    document.documentElement.removeEventListener("mousemove",onDrag);
    document.documentElement.removeEventListener("mouseup",stopDrag);
}
function getScalableDivWidth(){
    return parseInt(window.getComputedStyle(document.querySelector(".scalable")).width,10);
}