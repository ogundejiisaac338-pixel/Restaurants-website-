
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navLinks.classList.remove("show");
    });
});

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        toggle.textContent = "☀️";
    }else{
        toggle.textContent = "🌙";
    }
});

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scrollY > 50);
});

/* filter */
function filterMenu(category){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        if(category === "all"){
            card.style.display="block";
        }

        else if(card.classList.contains(category)){
            card.style.display="block";
        }

        else{
            card.style.display="none";
        }

    });

}