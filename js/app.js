// mobile menu toggle
let menuBars = document.querySelector('.fa-bars');
let xMarkMenu = document.querySelector('.fa-xmark');
let menu = document.querySelector('.menu')

menuBars.addEventListener('click', toggleMenu);
xMarkMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('toggle');
}