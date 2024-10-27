const VIDEO = document.querySelectorAll('.video-slide')
const DOC_CARD = document.querySelectorAll('.doctors__card')
const LIST_BTN = document.querySelector('.list-btn')
const MENU = document.querySelector('.header__menu')
const SECTION = document.querySelectorAll('.section')
const MENU_ITEMS = document.querySelectorAll('.menu-item')
const MODAL_BG = document.querySelector('.modal-bg')
const MODAL_THANKS = document.querySelector('.modal-thanks')
const MODAL_ERROR = document.querySelector('.modal-error')


const closeModalBtn = document.querySelectorAll('.closeModal')
const openModal = document.querySelectorAll('.openModal')
const modalItems = document.querySelectorAll('.modal')

const REVIEW_BG = document.querySelector('.modal-bg-review')
const REVIEW_POPUP = document.querySelector('.review-paragraph')
const ICON_WRAPPER = document.querySelector('.icon-wrapper')

const REVIEW_LIST = document.querySelector('.list-wrapper')
const REVIEW_ITEM = document.querySelectorAll('.review-item')
const REVIEW_BTN = document.querySelector('.reviews__btn')
const REVIEW_SUM = document.querySelector('.reviews-sum')


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

let sum = Object.keys(REVIEW_ITEM).length
REVIEW_SUM.textContent = "" + sum

REVIEW_BTN.addEventListener('click', ()=> {
    REVIEW_LIST.classList.toggle('active')
    REVIEW_BTN.classList.toggle('active')
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

function openErrorModal() {
    closeModal()
    MODAL_BG.classList.add('active')
    MODAL_ERROR.classList.add('active')
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
                const itemElement = item.closest('.review-item')
                const descReviewTitle = itemElement.querySelector('.desc-title')
                const descReviewElement = itemElement.querySelector('.desc-review')
                const descReviewIcon = itemElement.querySelector('.desc-icon')
                let icon = descReviewIcon.getAttribute('src')
                REVIEW_POPUP.innerHTML = `<p>${descReviewTitle.innerHTML}</p>` + `<br>` + `<p>${descReviewElement.innerHTML}</p>`
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


//Формирование формы аналитики
$(document).ready(function () {
    let url_string = location.href;
    let url = new URL(url_string);
    let utm_source = url.searchParams.get('utm_source');
    let utm_medium = url.searchParams.get('utm_meduim');
    let utm_compaign = url.searchParams.get('utm_compaign');
    let utm_content = url.searchParams.get('utm_content');
    let utm_term = url.searchParams.get('utm_term');
    let yclid = url.searchParams.get('yclid');
    let gclid = url.searchParams.get('gclid');
    let pm_position = url.searchParams.get('pm_position');
    let keyword = url.searchParams.get('keyword');
    let clientid;
    let googlecid;

    $('.analytics input[name="utm_source"]').val(utm_source);
    $('.analytics input[name="utm_medium"]').val(utm_medium);
    $('.analytics input[name="utm_compaign"]').val(utm_compaign);
    $('.analytics input[name="utm_content"]').val(utm_content);
    $('.analytics input[name="utm_term"]').val(utm_term);
    $('.analytics input[name="yclid"]').val(yclid);
    $('.analytics input[name="gclid"]').val(gclid);
    $('.analytics input[name="pm_position"]').val(pm_position);
    $('.analytics input[name="keyword"]').val(keyword);

    if (document.cookie.search('(?:^|;)\\s*_ga=([^;]*)') !== -1) {
        googlecid = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
        $('.analytics input[name="googlecid"]').val(googlecid[0].slice(10));
    } else {
        googlecid = 'GA - отсуствует'
        $('.analytics input[name="googlecid"]').val(googlecid);
    }

    if (document.cookie.search('(?:^|;)\\s*_ym_uid=([^;]*)') !== -1) {
        clientid = document.cookie.match('(?:^|;)\\s*_ym_uid=([^;]*)');
        $('.analytics input[name="clientid"]').val(clientid[1]);
    } else {
        clientid = 'YM - отсуствует'
        $('.analytics input[name="clientid"]').val(clientid);
    }

});

const googleStat = document.getElementById('googleStat')
const yandexStat = document.getElementById('yandexStat')

function sendStats() {
    if (googleStat) {
        googleStat.click()
    }

    if (yandexStat) {
        yandexStat.click()
    }
}



//Передача лида и формирование формы аналитики
$(function () {
    $('form').submit(function (e) {
        e.preventDefault()
        $(this).find('input').each(function() {
            let $input = $(this);

            if ($input.attr('name') === 'name' && /\d/.test($input.val())) {
                $input.addClass('invalid');
            }
        });
        let $form = $(this),
            formID,
            formData = new FormData(this);
        $("form#analytics").serializeArray().forEach(function (field) {
            formData.append(field.name, field.value)
        });
        formID = "#" + $form.attr('id') + " button";  // Формируем переменную с номер формы и добавляем селектор button
        $(formID).prop('disabled', true);
        $(formID).css({'opacity': 0.3});
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
        }).done(function () {
            let fileName = 'Прикрепить файл';
            $('form').trigger('reset');
            $('.modal-thanks').fadeIn();
            $(formID).prop('disabled', false);
            $(formID).css({'opacity': 1});
            openThanksModal()
            sendStats()
        }).fail(function () {
            openErrorModal()
            $(formID).prop('disabled', false);
            $(formID).css({'opacity': 1});
            $('form').trigger('reset');
        })
    });
});