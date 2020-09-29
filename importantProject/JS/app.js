document.write('<script src="../JS/封装/move.js"><\/script>')
function ChangeScale(res1,res2){
    var myDiv1 = document.getElementById('div1');
    myDiv1.style.width = res1;
    myDiv1.style.height = res2
}


function showHide(){
    var myDiv1 = document.getElementById('div1');
    var btn = document.getElementById('showHidebtn');
    if(myDiv1.style.display=='none'){
        myDiv1.style.display = 'block';
        btn.value = '隐藏';
    }
    else{
        myDiv1.style.display = 'none';
        btn.value = '显示';
    }
}
//
function ShowDayNight(){
    var btn = document.getElementById('dayNightBtn');
    if(btn.value=='白天'){
        btn.value = '夜晚';
        document.body.className = 'day';
    }else{
        btn.value = '白天';
        document.body.className = 'night';
    }
}
//
function ChangeColor(res){
    var myDiv1 = document.getElementById('div1');
    myDiv1.style.background = res;
}
//
function fadeOut(element){
    var ele = document.getElementById(element);
    ele.style.transition = "opacity 1.25s ease-in 0s";
    ele.style.opacity = 0;
}

//
window.onload = function(){
    //事件
    var alertB = document.getElementById('alertBtn');
    alertB.onclick = function(){
        alert(1);
    };

    //实现全选功能
    var allC = document.getElementById("allCheck");
    var inputList = document.getElementsByTagName("input");
    allC.onclick = function(){
        for(var i=0;i<inputList.length;i++){
            inputList[i].checked = allC.checked;
        }   
    }
    //绑定
    var BDBtn = document.getElementById("BangDing");
    function bd01(){
        alert("绑定");
    }
    BDBtn.addEventListener('click',bd01,false);
    //解绑
    //BDBtn.removeEventListener('click',bd01,false);

    var aiGuo = document.querySelector(".aiguo");
    //获取鼠标点击位置
    document.onmousedown = function(ev){
        var oEvent = ev || event;
        
        //网页滚动距离
        var sT = document.documentElement.scrollTop || document.body.scrollTop;
        var sL = document.documentElement.scrollLeft || document.body.scrollLeft;
        //把鼠标位置赋值给div
        aiGuo.style.left = oEvent.clientX + sL - aiGuo.offsetWidth/2 + "px";
        aiGuo.style.top = oEvent.clientY + sT - (aiGuo.offsetHeight+10) + "px";

        aiGuo.style.opacity = '1';
        //aiGuo.style.opacity = 0;
        move(aiGuo,'opacity',0,1250);
        //move(aiGuo,'top',oEvent.clientY+sT-50,1250);
    }
    
};