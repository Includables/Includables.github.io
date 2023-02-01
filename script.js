const hamburger = document.querySelector(".hamburger");
const navBarMenu = document.querySelector(".navbarMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBarMenu.classList.toggle("active");
})

document.querySelectorAll
    (".navbarItem").forEach(n => n.addEventListener
        ("click", () => {
            hamburger.classList.remove("active");
            navBarMenu.classList.remove("active");
        }
))

document.querySelectorAll
    (".btnone").forEach(n => n.addEventListener
        ("click", () => {
            hamburger.classList.remove("active");
            navBarMenu.classList.remove("active");
        }
))
