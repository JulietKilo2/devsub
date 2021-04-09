const menuContainer = document.querySelector('.menu-container')
const menu = document.querySelector('.menu')
const scrollToTopBtn = document.querySelector('.scroll-up-btn')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        menuContainer.classList.add('active')
        menu.classList.add('active')
        scrollToTopBtn.classList.add('active')
    }
    else {
        menuContainer.classList.remove('active')
        menu.classList.remove('active')
        scrollToTopBtn.classList.remove('active')
    }
})