


// function sliderInit() {
//
// }
// sliderInit()
//
// let teamSlider = new Swiper('.video-slider', {
//     breakpoints: {
//         320: {
//             loop: true,
//             speed: 400,
//             slidesPerView: 3,
//             centeredSlides: true,
//
//         },
//         767: {
//             destroy: true
//         },
//     },
//
// })
//
// window.addEventListener("resize", () => {
//     let width = window.innerWidth
//
//     if (width >= 960) {
//
//     } else {
//
//     }
// });
//
const video = document.querySelector('.video-slide')


video.addEventListener('mouseenter', function() {
    video.play();
});

video.addEventListener('mouseleave', function() {
    video.pause();
});

