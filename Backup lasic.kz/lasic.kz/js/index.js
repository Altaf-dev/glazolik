$(function () {

    $(document).ready(function(){
        $('a[href^="tel:"]').click(function(){
            yaCounter32190689.reachGoal('call');

            ga('send', {
                hitType: 'event',
                eventCategory: 'Click',
                eventAction: 'call',
                eventLabel: 'Клик на телефон'
            });
        });

        $('footer .socials a').click(function(){
            if($(this).hasClass('vk')){
                yaCounter32190689.reachGoal('goal-wts');

                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Click',
                    eventAction: 'goal-wts',
                    eventLabel: 'Клик на whatsapp'
                });
            }
            if($(this).hasClass('fb')){
                yaCounter32190689.reachGoal('goal-fb');

                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Click',
                    eventAction: 'goal-fb',
                    eventLabel: 'Клик на facebook'
                });
            }
            if($(this).hasClass('inst')){
                yaCounter32190689.reachGoal('goal-insta');

                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Click',
                    eventAction: 'goal-insta',
                    eventLabel: 'Клик на instagram'
                });
            }
            if($(this).hasClass('ok')){
                yaCounter32190689.reachGoal('goal-ok');

                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Click',
                    eventAction: 'goal-ok',
                    eventLabel: 'Клик на ok'
                });
            }
            if($(this).hasClass('wa')){
                yaCounter32190689.reachGoal('goal-vk');

                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Click',
                    eventAction: 'goal-vk',
                    eventLabel: 'Клик на vk'
                });
            }
        });
    });

    setTimeout(function () {
        var img = new Image();
        img.src = "../img/cup2.png";
        img.onload = function () {
            $("#cup").html(img);
        };

        setTimeout(function () {
            var img = new Image();
            img.src = "../img/cup1.png";
            img.onload = function () {
                $("#cup").html(img);
            };
        }, 5000);
    }, 5000);

    $('header .mobile__btn').click(function(){
        $('.menu').toggleClass('menu--anim menu--open')
    });

    $('nav#menu ul li .button2').click(function(){
        $('nav#menu.menu--open').removeClass('menu--anim menu--open');
    });

    $(".phone_field").mask("+7 (999) 999-99-99");

    $(".switchery").each(function () {
        new Switchery(this, {size: 'small', color: '#e76035', secondaryColor: '#c2c2c2'});
    });

    $(".item_text").each(function () {
        $(this).attr("data-h", $(this).css("height"));
    });

    $(".switchery").change(function () {
        var ai = $(this).parent().closest(".about_item");
        ai.attr("open", $(this)[0].checked);
        if ($(this)[0].checked) {
            updateHeight(ai, false)
        } else {
            ai.css("height", "416px");
            ai.find(".item_text_h")
                .css("height", "0");
        }
    });

    var f = true;
    $(".show_videos").click(function () {
        if (f) {
            $(".videos").addClass("a_videos");
            $(".show_videos").html("Скрыть");
        } else {
            $(".videos").removeClass("a_videos");
            $(".show_videos").html("Показать отзывы");
        }
        f = !f;
    });

    $(document).on("click", ".popup", function () {
        $(".form_title").html($(this).attr("data-title"));
        $(".form_button").html($(this).attr("data-button"));
        $("#from").val($(this).html());
        $(".fader").addClass("fader_a");
    });

    $(".close").click(function () {
        $(".fader").removeClass("fader_a");
        $('form').removeClass('is-active');
    });


	/*
    $(".send").click(function () {
        var $form = $(this).parent().find("form");

        if(!$form.hasClass('is-active')){
            $form.addClass('is-active');

            return false;
        }else{
            if (isValid($form)) {
                $(".close").click();
                yaCounter32190689.reachGoal("ZAYAVKA");
                $.post("/order.php", $form.serialize());
                setTimeout(function () {
                    location.assign("thanks.html");
                }, 1000);
            }
        }
    });
*/
	

	$(".order_item form").submit(function() {
		$.ajax({
			type: "POST",
			url: "/bitrix-1.php",
			data: $(this).serialize()
		}).done(function() {
			yaCounter32190689.reachGoal("ZAYAVKA");
			$(this).find("input").val("");
			setTimeout(function () {
				location.assign("thanks.html");
			}, 1000);
			$(".order_item form").trigger("reset");
		});
		return false;
	});


	$(".dialog form").submit(function() {
		$.ajax({
			type: "POST",
			url: "/bitrix-1.php",
			data: $(this).serialize()
		}).done(function() {
			yaCounter32190689.reachGoal("ZAYAVKA");
			$(this).find("input").val("");
			setTimeout(function () {
				location.assign("thanks.html");
			}, 1000);
			$(".dialog form").trigger("reset");
		});
		return false;
	});




    $(".about_item a").fancybox({
        openEffect: "none",
        closeEffect: "none",
        title: $("#hidden_link").html()
    });

    $("#show_map").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    var count = getRandomInt(9021, 9123);
    $("#count").html(prepareCount(count));
    setInterval(function () {
        count = count + getRandomInt(1, 3);
        $("#count").html(prepareCount(count));
    }, 4000);

    var st;
    $(window).scroll(function () {
        $("header").addClass("h_header");
        $("#menu").fadeOut(200);
        if (IS_OPEN) {
            $( 'button.menu__handle').click();
        }

        if (st) clearTimeout(st);
        st = setTimeout(function () {
            $("header").removeClass("h_header");
            $("#menu").fadeIn(200);
        }, 1000);
    }).trigger("scroll");

    $(".scroll").click(function () {
        var $el = $("#" + $(this).attr("data-scroll"));
        $("html, body").animate({scrollTop: $el.offset().top}, 500);
    });

    $(".menu__handle, header .mobile__btn").click(function () {
        $("header").addClass("fixed_header");
        console.log('asdasd');
    });

    $(".switch .button2").click(function () {
        $(this).parent().find("input").click();
    });

    initAnimations();
});

function prepareCount(count) {
    return count.toString()[0] + " " + count.toString().slice(1) + "шт";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function isValid(node) {
    var valid = true;
    $("input, select").removeClass("not_valid");
    $.each($(node).find("input, select"), function () {
        if ($(this).val() == "" && $(this).attr("data-valid") != "no") {
            if ($(this).attr("type") != "file") {
                valid = false;
                var p = $(this).parent();
                p.addClass("animated shake");
                setTimeout(function () {
                    p.removeClass("animated")
                        .removeClass("shake");
                }, 1500);
            }
        }
    });
    return valid;
}

function initAnimations() {
    setTimeout(function () {
        $(".first").addClass("first_a");
    }, 400);

    $(window).scroll(function () {

        if (window.innerHeight - $(".why")[0].getBoundingClientRect().top > 600) {
            $(".why").addClass("why_content_a");
        }

        if (window.innerHeight - $(".why")[0].getBoundingClientRect().top > 900) {
            $(".why").addClass("adv_items_a");
        }

        if (window.innerHeight - $(".order")[0].getBoundingClientRect().top > 600) {
            $(".order").addClass("order_a");
        }

        if (window.innerHeight - $(".about")[0].getBoundingClientRect().top > 400) {
            $(".about").addClass("about_a");
            setTimeout(function () {
                $(".about_a").addClass("d_d");
            }, 2000);
        }

        if (window.innerHeight - $(".think")[0].getBoundingClientRect().top > 600) {
            $(".think").addClass("think_a");
        }


    }).trigger("scroll");
}

function updateHeight(ai, arrow) {
    if (arrow && ai.attr("open") != "open") return;
    var index = ai.find(".bb-custom-wrapper").attr("data-index");
    $text = $(ai.find(".item_text").get(index));
    ai.find(".item_text_h").html($text.html());
    var h = 416 + parseInt($text.attr("data-h").slice(0, -2));
    ai.css("height", h + "px");
    ai.find(".item_text_h")
        .css("height", $text.attr("data-h"));
}


console.log(location.href);

var url_string = location.href;
var url = new URL(url_string);
var utm_source = url.searchParams.get('utm_source');
var utm_term = url.searchParams.get('utm_term');
var yclid = url.searchParams.get('yclid');
var gclid = url.searchParams.get('gclid');

$('form input[id="utm_source"]').val(utm_source);
$('form input[id="utm_term"]').val(utm_term);
$('form input[id="yclid"]').val(yclid);
$('form input[id="gclid"]').val(gclid);

console.log(utm_source);
console.log(utm_term);
console.log(yclid);
console.log(gclid);