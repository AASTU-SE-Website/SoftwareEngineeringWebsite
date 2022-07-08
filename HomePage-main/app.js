const headerMenu = document.querySelector(".headerMenu");
const headerMenuHamburger = document.querySelector(".headerMenuHamburger");
const primaryNav = document.querySelector(".primaryNav");
const headerSignUp = document.querySelector(".headerSignUp");

const myNav = document.querySelector("header");
//const logoFirst = document.querySelector(".logo > svg .cls-1");

window.onscroll = function() {
    if (
        document.body.scrollTop >= 200 ||
        document.documentElement.scrollTop >= 200
    ) {
        myNav.classList.add("nav-colored");
        myNav.classList.add("transition");
        myNav.classList.remove("nav-transparent");
        // logoFirst.style.fill = "white";
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");

        // logoFirst.style.fill = "black";
    }
};

let menuOpen = false;

function toggleMenu() {
    headerMenuHamburger.classList.toggle("open");
    primaryNav.classList.toggle("open");
    headerSignUp.classList.toggle("hidden");
    menuOpen = !menuOpen;
}

function checkResize() {
    if (menuOpen && window.innerWidth >= "1024") toggleMenu();
}
window.addEventListener("resize", checkResize);
headerMenu.addEventListener("click", toggleMenu);