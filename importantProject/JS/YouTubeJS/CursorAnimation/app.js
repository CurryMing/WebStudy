

window.onload = function(){
    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".nav-links li");
    document.onmousemove = function(ev){
        var oEvent = ev || event;
        mouseCursor.style.top = oEvent.clientY + 'px';
        mouseCursor.style.left = oEvent.clientX + 'px';
    }
    navLinks.forEach(link =>{
        link.addEventListener("mouseover",() => {
            mouseCursor.classList.add("link-grow");
            link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave",() => {
            mouseCursor.classList.remove("link-grow");
            link.classList.remove("hovered-link");
        });
    });
}

