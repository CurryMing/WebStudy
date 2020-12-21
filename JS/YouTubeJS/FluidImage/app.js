window.onload = function(){
    let modal = document.querySelector(".modal");
    let previews = document.querySelectorAll(".gallery img");
    let original = document.querySelector(".full-img");
    let imgText = document.querySelector(".caption");

    previews.forEach(element => {
        element.addEventListener("click",() => {
            modal.classList.add("open");
            original.classList.add("open");
            //
            const originalSrc = element.getAttribute("src");
            original.src = originalSrc;
            const altText = element.alt;
            imgText.textContent = altText;
        });
    });
    modal.addEventListener("click",(e) => {
        if(e.target.classList.contains("modal")){
            modal.classList.remove("open");
            original.classList.remove("open");
        }
    });
}