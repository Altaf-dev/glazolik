const VIDEO = document.querySelectorAll('.video-slide')
const DOC_CARD = document.querySelectorAll('.doctors__card')
const LIST_BTN = document.querySelector('.list-btn')


let questionsSlider = new Swiper('.slider-wrapper', {
    speed: 400,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 15,
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        600: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 3,
        },
    },

})

let teamSlider = new Swiper('.hardware-slider', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.hardware-button-next',
        prevEl: '.hardware-button-prev',
    },
})

let aboutSlider = new Swiper('.about__slider', {
    speed: 400,
    loop: true,
    // // slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.about-button-prev',
        prevEl: '.about-button-next',
    },
})

VIDEO.forEach((item) => {
    item.addEventListener('mouseenter', ()=> {
        item.play()
    })
    item.addEventListener('mouseleave', ()=> {
        item.pause()
    })
})

DOC_CARD.forEach((item) => {
    const IMG_BLOCK = item.querySelector('.img-block')
    const LIST = item.querySelector('.cert-list')
    const ITEM_COUNT = LIST.querySelectorAll('.cert-item').length
    const ITEM_SUM = item.querySelector('.item-sum')
    const CERT_SHOW = item.querySelector('.list-desc')
    ITEM_SUM.textContent = "" + ITEM_COUNT

    CERT_SHOW.addEventListener('click', () => {
        LIST.classList.toggle('active')
    })

    if (ITEM_COUNT <= 8) {
        IMG_BLOCK.classList.add('show-all')
    }

    LIST_BTN.addEventListener('click', ()=> {
        if (item.classList.contains('hide')) {
            item.classList.toggle('visible')
        }
    })

})


