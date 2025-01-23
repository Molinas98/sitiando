$(document).ready(function () {
    $('.carrusel-clientes').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 4000,
        speed: 300,
        pauseOnHover: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
            
        ]
    });

    $('.carrusel-testimonios').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 300,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });

    
    $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: true
    });

    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

});
