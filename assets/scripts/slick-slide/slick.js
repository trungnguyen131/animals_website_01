$(document).ready(function() {
    $('.slick-layout-service').slick({
        infinite: true,
        autoplay: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        loop:true,

        responsive: [
            {
                breakpoint: 1151,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 881,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    dots:false,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow:`<button type='button' class='slick-prev pull-left pull-customArrows'><ion-icon name="chevron-back-outline"></ion-icon></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right pull-customArrows'><ion-icon name="chevron-forward-outline"></ion-icon></ion-icon></button>`,
    });  
})

$(document).ready(function() {
    $('.slick-cta').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop:true,

        prevArrow:`<button type='button' class='slick-prev pull-left pull-customArrows'><ion-icon name="chevron-back-outline"></ion-icon></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right pull-customArrows'><ion-icon name="chevron-forward-outline"></ion-icon></ion-icon></button>`,
    });  
})