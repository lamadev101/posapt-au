(function() {
    "use strict";
    new Swiper('.mySwiper', {
        speed: 600,
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            640: {
                slidesPerView: 1,

            },
            992: {
                slidesPerView: 1,

            }
        }
    });

    // oos slider
    new Swiper('.oos_Swiper1', {
        speed: 600,
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            640: {
                slidesPerView: 1,

            },
            992: {
                slidesPerView: 1,

            }
        }
    });
    // oos slider
    new Swiper('.whyus1', {
        speed: 600,
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            640: {
                slidesPerView: 1,

            },
            992: {
                slidesPerView: 1,

            }
        }
    });

})()