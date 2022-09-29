// services dropdown

let stopService;

const servicesBtn = document.querySelector('.services-link')
servicesShow = document.querySelector('.navbar-services')

servicesBtn.addEventListener('mouseover', function () {
    if (stopService) {
        clearTimeout(stopService)
    }
    servicesShow.classList.add('showme')
})
servicesBtn.addEventListener('mouseout', function () {
    stopService = setTimeout(() => {
        servicesShow.classList.remove('showme')
    }, 500);

})
// webicon hover
let webIconShow;

const webUtilitybtn = document.querySelector('.web-utility')
utilitiesSection = document.querySelector('.utilities')

webUtilitybtn.addEventListener('mouseover', function () {
    if (webIconShow) {
        clearTimeout(webIconShow)
    }
    utilitiesSection.classList.add('showme')


})
webUtilitybtn.addEventListener('mouseout', function () {
    webIconShow = setTimeout(() => {
        utilitiesSection.classList.remove('showme')
    }, 500);

})

// hamburger icon show

const hamburgerIcon = document.querySelector('.hamburger')
navbarLinks = document.querySelector('.navbar-icons')

hamburgerIcon.addEventListener('click', function () {
    hamburgerIcon.classList.toggle('hamburger-close')
    navbarLinks.classList.toggle('showme')

})