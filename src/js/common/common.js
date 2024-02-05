document.addEventListener("DOMContentLoaded", function (event) {

    window.addEventListener('scroll', e => {
        if (document.documentElement.scrollTop > 200) {
            document.querySelector('.header').classList.add('header--white')
        } else {
            !document.querySelector('.header').classList.contains('header--white') || document.querySelector('.header').classList.remove('header--white')
        }
    })

    /* ============================
    menu
    ============================*/


    if (document.querySelector('[data-menu="open"]')) {
        const btnBurger = document.querySelector('[data-menu="open"]')
        const menuBurger = document.querySelector('[data-menu="container"]')

        btnBurger.addEventListener('click', e => {
            btnBurger.classList.toggle('open')
            menuBurger.classList.toggle('open')
            document.body.classList.toggle('page-hidden')
        })

        menuBurger.querySelectorAll('.isset-sub').forEach(item => {
            item.addEventListener('click', e => {
                e.stopPropagation()

                if (e.target.classList.contains('open')) {
                    e.target.classList.remove('open')
                    return false;
                }

                e.target.closest('ul').querySelectorAll('.open').forEach(li => {
                    li.classList.remove('open')
                })

                e.target.classList.toggle('open')
            })
        })
    }



})