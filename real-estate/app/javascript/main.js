
//SELECTORS
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const sliderContainer = document.querySelector('.Properties-slider')
const max = document.querySelectorAll('.Properties-slider-item').length -1
const nav = document.querySelector('.Header')
const toggleBtn = document.querySelector('.Header-nav-toggle')
const line = document.querySelectorAll('.line')
const menu = document.querySelector('.Header-nav-menu')
//Variables
let count = 0
const topOfNav = nav.offsetTop + 32

//EVENTS
window.addEventListener('scroll', fixNav)
toggleBtn.addEventListener('click', showSidebar)
next.addEventListener('click', nextSlider)
prev.addEventListener('click', (e) => {
    if(count => 0) {
        count--
        sliderContainer.style.left = '-' + 350 * count + 'px'
    } 
    e.preventDefault()
})
//5545.60009765625
//FUNCTIONS
function fixNav(){
    if(window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav')
    } 
     else {
        document.body.classList.remove('fixed-nav')
    }
}
function showSidebar() {
    if (menu.classList.contains('showw')) {
        menu.classList.remove('showw')
    } else {
        menu.classList.add('showw')
    }
}

function nextSlider(i) {
    if(count < max) {
        count++
        sliderContainer.style.left = '-' + 350 * count + 'px'
        
    } else {
        count = 0
        sliderContainer.style.left = '-' + 350 * count + 'px'
    }
    i.preventDefault()
}

//SWIPER
var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

let timer = setInterval(nextSlider, 3000)