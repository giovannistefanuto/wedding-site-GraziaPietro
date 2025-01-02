(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        // Assicurati che lo spinner sia visibile inizialmente
        if ($('#spinner').length > 0) {
            $('#spinner').addClass('show');
        }

        // Rimuovi lo spinner quando la finestra è completamente caricata
        $(window).on('load', function () {
            $('#spinner').removeClass('show');
        });

        // Rimuovi lo spinner automaticamente dopo 5 secondi (massimo)
        setTimeout(function () {
            if ($('#spinner').hasClass('show')) {
                $('#spinner').removeClass('show');
            }
        }, 5000); // 5000 ms = 5 secondi
    };

    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-300px');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 90
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);
