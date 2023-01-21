const hamburger = document.querySelector(".hamburger");
const navBarMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBarMenu.classList.toggle("active");
})

document.querySelectorAll
    (".navbar__links").forEach(n => n.addEventListener
        ("click", () => {
            hamburger.classList.remove("active");
            navBarMenu.classList.remove("active");
        }
))