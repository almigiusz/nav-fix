const burgerBtn = document.querySelector('.burger-btn')
const burgerLines = document.querySelectorAll('.burger-btn-line')
const navLinks = document.querySelectorAll('.nav__link')
const logo = document.querySelector('.nav__logo')
const navLinksBox = document.querySelector('.nav__links')
const nav = document.querySelector('.nav')

const handleNav = () => {
    burgerLines.forEach(line => {
        line.classList.toggle('opened')
    })
    navLinksBox.classList.toggle('active')
    document.body.classList.toggle('fixed-page')
    deleteClassOnDesktop()
}

const closeNav = () => {
    burgerLines.forEach(line => {
        line.classList.remove('opened')
    })
    navLinksBox.classList.remove('active')
    document.body.classList.remove('fixed-page')
}

const deleteClassOnDesktop = () => {
    if (window.innerWidth > 992) {
        closeNav()
    }
}

deleteClassOnDesktop()

navLinks.forEach(link => {
    link.addEventListener('click', handleNav)
})
burgerBtn.addEventListener('click', handleNav)
logo.addEventListener('click', closeNav)
window.addEventListener('resize', deleteClassOnDesktop)
