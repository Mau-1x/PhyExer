window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const heroHeight = document.querySelector(".hero").offsetHeight;
    
    if (window.scrollY < heroHeight) {
        header.classList.add("visible"); 
    } else {
        header.classList.remove("visible"); 
    }
});