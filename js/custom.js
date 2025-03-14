$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        pagination: {
            clickable: true,
            el: '.main_visual .page',
        },


    })

    const MSS = new Swiper('.main_news_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,


        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },

        navigation: {
            nextEl: '.main_news .btn_wrap .btn_next',
            prevEl: '.main_news .btn_wrap .btn_prev',
        },


        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            540: {
                slidesPerView: 3,

            }
        }

    });


    const onair_swiper = new Swiper('.main_onair .popup_wrap_slide', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,

        pagination: {
            el: '.popup_wrap .page',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });





});



$(function () {
    $('.main_community .news_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_community .news_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_community .news_tab_content .con').removeClass('on');
        $('.main_community .news_tab_content .con').eq(idx).addClass('on')
    })
});


$(function () {
    $('.main_community .schedule_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_community .schedule_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_community .schedule_tab_content .con').removeClass('on');
        $('.main_community .schedule_tab_content .con').eq(idx).addClass('on')
    })








});



$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })


})

$(function () {

    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');

        if ($('.header .gnb').hasClass('on')) {
            $('body').addClass('no-scroll');
            $('.header .gnb .sub_box').hide();
        } else {
            $('body').removeClass('no-scroll');
        }
    });


    $('.header .gnb > ul > li > a').on('click', function (e) {
        if ($(window).width() <= 1140) {
            e.preventDefault();
            let subMenu = $(this).siblings('.sub_box');

            if (subMenu.is(':visible')) {
                subMenu.slideUp();
            } else {
                $('.header .gnb .sub_box').slideUp();
                subMenu.slideDown();
            }
        }
    });

    $('.header .gnb .sub dt').on('click', function (e) {
        if ($(window).width() <= 1140) {
            e.preventDefault();
            let subItems = $(this).siblings('dd');

            if (subItems.is(':visible')) {
                subItems.slideUp();
            } else {
                $(this).closest('.sub').find('dd').slideUp();
                subItems.slideDown();
            }
        }
    });


    $(window).on('resize', function () {
        if ($(window).width() > 1140) {
            $('.header .gnb .sub_box').removeAttr('style');
            $('body').removeClass('no-scroll');
        }
    });

    $('header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })

    $('.header .gnb .sub dd a').on('mouseenter', function () {
        $(this).css({
            'color': '#1b55ad',
            'font-weight': '700'
        });
    }).on('mouseleave', function () {
        $(this).css({
            'color': '',
            'font-weight': ''
        });
    });
});

