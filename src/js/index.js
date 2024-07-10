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
        960: {
            // slidesPerView: 3.5,
        },
        1199: {
            slidesPerView: 3,
        },
    },

})

let teamSlider = new Swiper('.hardware-slider', {
    speed: 400,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.hardware-button-next',
        prevEl: '.hardware-button-prev',
    },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1.5,
    //     },
    //     600: {
    //         slidesPerView: 3,
    //     },
    //     960: {
    //         slidesPerView: 3.5,
    //     },
    //     1199: {
    //         slidesPerView: 3,
    //     },
    // },

})



VIDEO.forEach((item) => {
    item.addEventListener('mouseenter', ()=> {
        item.play()
    })
    item.addEventListener('mouseleave', ()=> {
        item.pause()
    })
})
