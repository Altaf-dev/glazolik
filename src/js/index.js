const VIDEO = document.querySelectorAll('.video-slide')
const DOC_CARD = document.querySelectorAll('.doctors__card')
const LIST_BTN = document.querySelector('.list-btn')
const MENU = document.querySelector('.header__menu')
const SECTION = document.querySelectorAll('.section')
const MENU_ITEMS = document.querySelectorAll('.menu-item')
const MODAL_BG = document.querySelector('.modal-bg')
const MODAL_THANKS = document.querySelector('.modal-thanks')

const closeModalBtn = document.querySelectorAll('.closeModal')
const openModal = document.querySelectorAll('.openModal')
const modalItems = document.querySelectorAll('.modal')

const REVIEW_BG = document.querySelector('.modal-bg-review')
const REVIEW_POPUP = document.querySelector('.review-paragraph')
const ICON_WRAPPER = document.querySelector('.icon-wrapper')


let authorIcon = document.querySelectorAll(".author-icon")


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
    const LIST = item.querySelector('.cert-list')
    const ITEM_COUNT = LIST.querySelectorAll('.cert-link').length
    const ITEM_SUM = item.querySelector('.item-sum')
    const CERT_SHOW = item.querySelector('.list-desc')
    ITEM_SUM.textContent = "" + ITEM_COUNT
    const TITLE_BTN = LIST_BTN.textContent

    CERT_SHOW.addEventListener('click', () => {
        LIST.classList.toggle('active')
        CERT_SHOW.classList.toggle('active')
    })

    if (ITEM_COUNT <= 8) {
        LIST.classList.add('show-all')
        CERT_SHOW.classList.add('hide')
    }

    LIST_BTN.addEventListener('click', ()=> {
        if (item.classList.contains('hide')) {
            item.classList.toggle('visible')
        }
        LIST_BTN.textContent = LIST_BTN.textContent === TITLE_BTN ? 'Свернуть' : TITLE_BTN
    })
})

document.addEventListener('scroll', () => {
    let initialTop = 110

    if (innerWidth <= 767) {
        initialTop = 60
    }
    if (scrollY >= initialTop) {
        MENU.classList.add('active')
    } else {
        MENU.classList.remove('active')
    }
})

function removeActiveClasses() {
    MENU_ITEMS.forEach(item => item.classList.remove('active'))
}
function addActiveClass(id) {
    const MENU_ITEMS = document.querySelector(`.menu-item[href="#${id}"]`)

    if (innerWidth <= 1199 && MENU_ITEMS) {
        MENU_ITEMS.classList.add('active')
        MENU_ITEMS.scrollIntoView()
    }
}

window.addEventListener('scroll', () => {
    let currentSection = ""

    SECTION.forEach(SECTION => {
        const sectionTop = SECTION.offsetTop
        const sectionHeight = SECTION.clientHeight

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = SECTION.getAttribute('id')
        }
    })
    removeActiveClasses()
    addActiveClass(currentSection)
})

//Остановка прокрутки сайта
function scrollStop() {
    document.querySelector("html").style.overflow = 'hidden'
}

//Восстановление прокрутки сайта
function scrollAuto() {
    document.querySelector("html").style.overflow = ''
}


// Открытие/закрытие модальных окон
function closeModal() {
    MODAL_BG.classList.remove('active')
    REVIEW_BG.classList.remove('active')
    modalItems.forEach((item) => {
        item.classList.remove('active')
    })
    scrollAuto()
}

function openThanksModal() {
    closeModal()
    MODAL_BG.classList.add('active')
    MODAL_THANKS.classList.add('active')
}

closeModalBtn.forEach((item) => {
    item.addEventListener('click', () => {
        closeModal()
    })
})

openModal.forEach((item) => {
    item.addEventListener('click', () => {
        modalItems.forEach((modals) => {
            if (modals.classList.contains(item.getAttribute('data-modal'))) {
                MODAL_BG.classList.add('active')
                modals.classList.add('active')
                scrollStop()
            }
        })
        modalItems.forEach((review) => {
            if (review.classList.contains(item.getAttribute('data-review'))) {
                REVIEW_BG.classList.add('active')
                review.classList.add('active')
                scrollStop()
                const itemElement = item.closest('.review-item')
                const descReviewElement = itemElement.querySelector('.desc-review')
                const descReviewIcon = itemElement.querySelector('.desc-icon')
                let icon = descReviewIcon.getAttribute('src')
                REVIEW_POPUP.innerHTML = descReviewElement.innerHTML
                ICON_WRAPPER.innerHTML = `<img src="${icon}" alt="">`
            }
        })
    })
})

// Рандомный цвет иконки автора отзыва
function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
authorIcon.forEach((item) => {
    item.style.backgroundColor = `${getRandomColor()}`
})
