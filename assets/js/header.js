document.addEventListener("DOMContentLoaded", () => {
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var scrollTop = $(this).scrollTop();
        if((scrollTop > 100) && !($('.offcanvas-top').hasClass('show'))) {
            if (scrollTop > lastScrollTop) {
                $('nav').css('top', '-85px');
            } else {
                $('nav').css('top', '0px');
            }
            lastScrollTop = scrollTop;
        }

        if(scrollTop > 100) {
            $('.efecto-banner').addClass('efecto');
        } else {
            $('.efecto-banner').removeClass('efecto');
        }
    });

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
        $(".offcanvas-backdrop").collapse('hide');
        document.body.style.overflow = 'auto';
    });

    AOS.init({
        duration: 1000,
        once: true
    });
});