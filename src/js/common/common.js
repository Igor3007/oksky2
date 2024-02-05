document.addEventListener("DOMContentLoaded", function (event) {

    window.addEventListener('scroll', e => {
        if (document.documentElement.scrollTop > 200) {
            document.querySelector('.header').classList.add('header--white')
        } else {
            document.querySelector('.header').classList.contains('header--white') || document.querySelector('.header').classList.remove('header--white')
        }
    })

})