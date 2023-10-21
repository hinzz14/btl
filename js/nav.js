const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const contact = document.querySelector(".Contact");
contact.addEventListener('click', ()=>{
    if (window.matchMedia("(max-width: 800px)").matches) { 
        //Animate Links
        navLinks.classList.remove("open");
        links.forEach(link => {
            link.classList.remove("fade");
        });
        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    }
});
