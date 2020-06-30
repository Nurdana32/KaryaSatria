/**
 * Template Name: Flattern - v2.0.1
 * Template URL: https://bootstrapmade.com/flattern-multipurpose-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
    "use strict";
    //Custom
    $(document).on('click', '#open-production', function (e) {
        $("#neon-box").css('display', 'block');
        $("#shopsign").css('display', 'block');
        $("#neon-box-pnth").css('display', 'none');
        $("#neon-box-pnth-sticker").css('display', 'none');
        $("#neon-box-pnth-sticker-form").css('display', 'none');
        $("#neon-box-pnth-backlite").css('display', 'none');
        $("#neon-box-pnth-backlite-form").css('display', 'none');
        $("#neon-box-pntv").css('display', 'none');
        $("#neon-box-pntv-sticker").css('display', 'none');
        $("#neon-box-pntv-sticker-form").css('display', 'none');
        $("#neon-box-pntv-backlite").css('display', 'none');
        $("#neon-box-pntv-backlite-form").css('display', 'none');
        $("#shopsign-pole").css('display', 'none');
        $("#shopsign-pole-form").css('display', 'none');
        $("#shopsign-plex").css('display', 'none');
        $("#shopsign-plex-form").css('display', 'none');
        $("#form-production").css('display', 'none');
        $("#result-production").text("0");
        $("#title-form").text("");
        $("#price").text("");
        $("#pnth-sticker-input").val("");
        $("#pnth-backliter-input").val("");
        $("#pntv-sticker-input").val("");
        $("#pntv-backlite-input").val("");
        $("#pole-input").val("");
        $("#plex-input").val("");
    });

    $(document).on('click', '#neon-box', function (e) {
        $("#neon-box").css('display', 'none');
        $("#shopsign").css('display', 'none');
        $("#neon-box-pnth").css('display', 'block');
        $("#neon-box-pntv").css('display', 'block');
        $("#title-form").text("Neon Box");
    });

    $(document).on('click', '#neon-box-pnth', function (e) {
        $("#neon-box-pnth").css('display', 'none');
        $("#neon-box-pntv").css('display', 'none');
        $("#neon-box-pnth-sticker").css('display', 'block');
        $("#neon-box-pnth-backlite").css('display', 'block');
        $("#title-form").text("Neon Box PNTH");
    });

    $(document).on('click', '#neon-box-pnth-sticker', function (e) {
        $("#neon-box-pnth-sticker").css('display', 'none');
        $("#neon-box-pnth-backlite").css('display', 'none');
        $("#form-production").css('display', 'block');
        $("#neon-box-pnth-sticker-form").css('display', 'block');
        $("#title-form").text("Neon Box PNTH Stiker");
        $("#price").text("3.000");
    });

    $(document).on('click', '#neon-box-pnth-backlite', function (e) {
        $("#neon-box-pnth-sticker").css('display', 'none');
        $("#neon-box-pnth-backlite").css('display', 'none');
        $("#form-production").css('display', 'block');
        $("#neon-box-pnth-backlite-form").css('display', 'block');
        $("#title-form").text("Neon Box PNTH Backlite");
        $("#price").text("1.500");
    });

    $(document).on('click', '#neon-box-pntv', function (e) {
        $("#neon-box-pnth").css('display', 'none');
        $("#neon-box-pntv").css('display', 'none');
        $("#neon-box-pntv-sticker").css('display', 'block');
        $("#neon-box-pntv-backlite").css('display', 'block');
        $("#title-form").text("Neon Box PNTV");
    });

    $(document).on('click', '#neon-box-pntv-sticker', function (e) {
        $("#neon-box-pntv-sticker").css('display', 'none');
        $("#neon-box-pntv-backlite").css('display', 'none');
        $("#form-production").css('display', 'block');
        $("#neon-box-pntv-sticker-form").css('display', 'block');
        $("#title-form").text("Neon Box PNTV Stiker");
        $("#price").text("3.300");
    });

    $(document).on('click', '#neon-box-pntv-backlite', function (e) {
        $("#neon-box-pntv-sticker").css('display', 'none');
        $("#neon-box-pntv-backlite").css('display', 'none');
        $("#form-production").css('display', 'block');
        $("#neon-box-pntv-backlite-form").css('display', 'block');
        $("#title-form").text("Neon Box PNTV Backlite");
        $("#price").text("1.950");
    });

    $(document).on('click', '#shopsign', function (e) {
        $("#neon-box").css('display', 'none');
        $("#shopsign").css('display', 'none');
        $("#shopsign-pole").css('display', 'block');
        $("#shopsign-plex").css('display', 'block');
        $("#title-form").text("Shopsign");
        $("#price").text("900")
    });

    $(document).on('click', '#shopsign-pole', function (e) {
        $("#shopsign-pole").css('display', 'none');
        $("#shopsign-plex").css('display', 'none');
        $("#form-production").css('display', 'block');
        $("#shopsign-pole-form").css('display', 'block');
        $("#title-form").text("Shopsign Pole");
        $("#price").text("600")
    });

    $(document).on('click', '#shopsign-plex', function (e) {
        $("#shopsign-pole").css('display', 'none');
        $("#shopsign-plex").css('display', 'none');
        $("#form-production").css('display', 'block');
        $("#shopsign-plex-form").css('display', 'block');
        $("#title-form").text("Shopsign Plex");
    });

    $(document).on('submit', '#neon-box-pnth-sticker-form', function (e) {
        calProduction(3000000, $("#pnth-sticker-input").val());
    });

    $(document).on('submit', '#neon-box-pnth-backlite-form', function (e) {
        calProduction(1500000, $("#pnth-backlite-input").val());
    });

    $(document).on('submit', '#neon-box-pntv-sticker-form', function (e) {
        calProduction(3300000, $("#pntv-sticker-input").val());
    });

    $(document).on('submit', '#neon-box-pntv-backlite-form', function (e) {
        calProduction(1950000, $("#pntv-backlite-input").val());
    });

    $(document).on('submit', '#shopsign-pole-form', function (e) {
        calProduction(900000, $("#pole-input").val());
    });

    $(document).on('submit', '#shopsign-plex-form', function (e) {
        calProduction(600000, $("#plex-input").val());
    });

    function calProduction(price, meters) {
        var result = price * meters;
        $("#result-production").text(result.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."));
    }

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;
                var scrolled = 20;

                if ($('#header').length) {
                    scrollto -= $('#header').outerHeight()

                    if (!$('#header').hasClass('header-scrolled')) {
                        scrollto += scrolled;
                    }
                }

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    // Stick the header at top on scroll
    $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
    });

    // Intro carousel
    var heroCarousel = $("#heroCarousel");
    var heroCarouselIndicators = $("#hero-carousel-indicators");
    heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
        (index === 0) ?
        heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
            heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
    });

    heroCarousel.on('slid.bs.carousel', function (e) {
        $(this).find('.carousel-content ').addClass('animated fadeInDown');
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Porfolio isotope and filter
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
            $('.venobox').venobox();
        });
    });

    // Skills section
    $('.skills-content').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Initi AOS
    AOS.init({
        duration: 800,
        easing: "ease-in-out"
    });

})(jQuery);
