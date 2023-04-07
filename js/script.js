const oberver = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animation")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animation")[1].classList.add("fadeInTop");
            document.querySelectorAll(".animation")[2].classList.add("fadeInRight");
        } else {
            document.querySelectorAll(".animation")[0].classList.remove("fadeInLeft");
            document.querySelectorAll(".animation")[1].classList.remove("fadeInTop");
            document.querySelectorAll(".animation")[2].classList.remove("fadeInRight");
        } 
        
    })
})
oberver.observe(document.querySelector(".imagecontainer"))