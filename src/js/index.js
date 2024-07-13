const VIDEO = document.querySelectorAll('.video-slide')


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



