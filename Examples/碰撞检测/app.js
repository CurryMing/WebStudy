window.onload = function () {
    var oDiv = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var disX = 0;
    var disY = 0;
    oDiv.onmousedown = function (ev) {
        var ev = ev || window.event;
        disX = ev.clientX - oDiv.offsetLeft;
        disY = ev.clientY - oDiv.offsetTop;
        document.onmousemove = function (ev) {
            var ev = ev || window.event;
            var isCollision = OnCollisionEnter(oDiv, oDiv2);
            if (!isCollision) {
                oDiv2.style.background = 'yellow';
            } else {
                oDiv2.style.background = 'blue';
            }
            oDiv.style.left = ev.clientX - disX + 'px';
            oDiv.style.top = ev.clientY - disY + 'px';
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
        return false;
    }

    function OnCollisionEnter(element_1, element_2) {
        var t1 = element_1.offsetTop;
        var l1 = element_1.offsetLeft;
        var r1 = element_1.offsetLeft + element_1.offsetWidth;
        var b1 = element_1.offsetTop + element_1.offsetHeight;

        var t2 = element_2.offsetTop;
        var l2 = element_2.offsetLeft;
        var r2 = element_2.offsetLeft + element_2.offsetWidth;
        var b2 = element_2.offsetTop + element_2.offsetHeight;

        if (b1 < t2 || l1 > r2 || t1 > b2 || r1 < l2) {// 表示没碰上
            return false;
        } else {
            return true;
        }
    }
}

