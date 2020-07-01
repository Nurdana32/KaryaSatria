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
        $("#shopsign-flex").css('display', 'none');
        $("#shopsign-flex-form").css('display', 'none');
        $("#form-production").css('display', 'none');
        $("#result-production").text("0");
        $("#title-form").text("");
        $("#price").text("");
        $("#pnth-sticker-inputP").val("");
        $("#pnth-sticker-inputL").val("");
        $("#pnth-backliter-inputP").val("");
        $("#pnth-backliter-inputL").val("");
        $("#pntv-sticker-inputP").val("");
        $("#pntv-sticker-inputL").val("");
        $("#pntv-backlite-inputP").val("");
        $("#pntv-backlite-inputL").val("");
        $("#pole-inputP").val("");
        $("#pole-inputL").val("");
        $("#flex-inputP").val("");
        $("#flex-inputL").val("");
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
        $("#shopsign-flex").css('display', 'block');
        $("#title-form").text("Shopsign");
    });

    $(document).on('click', '#shopsign-pole', function (e) {
        $("#shopsign-pole").css('display', 'none');
        $("#shopsign-flex").css('display', 'none');
        $("#form-production").css('display', 'block');
        $("#shopsign-pole-form").css('display', 'block');
        $("#title-form").text("Shopsign Pole");
        $("#price").text("900")
    });

    $(document).on('click', '#shopsign-flex', function (e) {
        $("#shopsign-pole").css('display', 'none');
        $("#shopsign-flex").css('display', 'none');
        $("#form-production").css('display', 'block');
        $("#shopsign-flex-form").css('display', 'block');
        $("#title-form").text("Shopsign Flex");
        $("#price").text("600")
    });


    $(document).on('submit', '#neon-box-pnth-sticker-form', function (e) {
        calProduction(3000000, $("#pnth-sticker-inputP").val(), $("#pnth-sticker-inputL").val());

    });

    $(document).on('submit', '#neon-box-pnth-backlite-form', function (e) {
        calProduction(1500000, $("#pnth-backlite-inputP").val(), $("#pnth-backlite-inputL").val());
    });

    $(document).on('submit', '#neon-box-pntv-sticker-form', function (e) {
        calProduction(3300000, $("#pntv-sticker-inputP").val(), $("#pntv-sticker-inputL").val());
    });

    $(document).on('submit', '#neon-box-pntv-backlite-form', function (e) {
        calProduction(1950000, $("#pntv-backlite-inputP").val(), $("#pntv-backlite-inputL").val());
    });

    $(document).on('submit', '#shopsign-pole-form', function (e) {
        calProduction(900000, $("#pole-inputP").val(), $("#pole-inputL").val());
    });

    $(document).on('submit', '#shopsign-flex-form', function (e) {
        calProduction(600000, $("#flex-inputP").val(), $("#flex-inputL").val());
    });

    function calProduction(price, panjang, lebar) {
        var result = (panjang * lebar) * price;
        if (result != 0 || result != '') {
            document.getElementById('kirim').style.visibility = 'visible';
        } else {
            document.getElementById('kirim').style.visibility = 'hidden';
        }
        $("#result-production").text(result.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."));
    }


    document.getElementById('kirim').style.visibility = 'hidden';


    $("#masuk").on("hidden.bs.modal", function () {
        document.getElementById('kirim').style.visibility = 'hidden';
    });

    $(document).ready(function () {
        $("#satu").click(function () {

            var jenis = "mailto:malang@karyasatria.com?subject=Produksi&body=Jenis Pesanan :  Neon Box PNTH Stiker %0d%0a";
            var panjang = $("#pnth-sticker-inputP").val();
            var lebar = $("#pnth-sticker-inputL").val();
            var hargaAwal = 3000000;
            var harga = (panjang * lebar) * hargaAwal;
            var harga = harga.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            $("#kirim").attr("href", jenis + "Panjang : " + panjang + "%0d%0aLebar : " + lebar + "%0d%0aHarga : Rp" + harga);
        });
    });

    $(document).ready(function () {
        $("#dua").click(function () {
            var jenis = "mailto:malang@karyasatria.com?subject=Produksi&body=Jenis Pesanan :  Neon Box PNTH Backlite %0d%0a";
            var panjang = $("#pnth-backlite-inputP").val();
            var lebar = $("#pnth-backlite-inputL").val();
            var hargaAwal = 1500000;
            var harga = (panjang * lebar) * hargaAwal;
            var harga = harga.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            $("#kirim").attr("href", jenis + "Panjang : " + panjang + "%0d%0aLebar : " + lebar + "%0d%0aHarga : Rp" + harga);
        });
    });

    $(document).ready(function () {
        $("#tiga").click(function () {
            var jenis = "mailto:malang@karyasatria.com?subject=Produksi&body=Jenis Pesanan :  Neon Box PNTV Stiker %0d%0a";
            var panjang = $("#pntv-sticker-inputP").val();
            var lebar = $("#pntv-sticker-inputL").val();
            var hargaAwal = 3300000;
            var harga = (panjang * lebar) * hargaAwal;
            var harga = harga.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            $("#kirim").attr("href", jenis + "Panjang : " + panjang + "%0d%0aLebar : " + lebar + "%0d%0aHarga : Rp" + harga);
        });
    });

    $(document).ready(function () {
        $("#empat").click(function () {
            var jenis = "mailto:malang@karyasatria.com?subject=Produksi&body=Jenis Pesanan :  Neon Box PNTV Backlite %0d%0a";
            var panjang = $("#pntv-backlite-inputP").val();
            var lebar = $("#pntv-backlite-inputL").val();
            var hargaAwal = 195000;
            var harga = (panjang * lebar) * hargaAwal;
            var harga = harga.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            $("#kirim").attr("href", jenis + "Panjang : " + panjang + "%0d%0aLebar : " + lebar + "%0d%0aHarga : Rp" + harga);
        });
    });

    $(document).ready(function () {
        $("#lima").click(function () {
            var jenis = "mailto:malang@karyasatria.com?subject=Produksi&body=Jenis Pesanan :  Shopsign Pole %0d%0a";
            var panjang = $("#pole-inputP").val();
            var lebar = $("#pole-inputL").val();
            var hargaAwal = 900000;
            var harga = (panjang * lebar) * hargaAwal;
            var harga = harga.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            $("#kirim").attr("href", jenis + "Panjang : " + panjang + "%0d%0aLebar : " + lebar + "%0d%0aHarga : Rp" + harga);
        });
    });

    $(document).ready(function () {
        $("#enam").click(function () {
            var jenis = "mailto:malang@karyasatria.com?subject=Produksi&body=Jenis Pesanan :  Shopsign Flex %0d%0a";
            var panjang = $("#flex-inputP").val();
            var lebar = $("#flex-inputL").val();
            var hargaAwal = 600000;
            var harga = (panjang * lebar) * hargaAwal;
            var harga = harga.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            $("#kirim").attr("href", jenis + "Panjang : " + panjang + "%0d%0aLebar : " + lebar + "%0d%0aHarga : Rp" + harga);
        });
    });

    $('.hitung').click(function () {
        var panjang = $(this).closest('.produksi').children('.panjang').val();
        // var panjangs = [$('#pnth-sticker-inputP').val(), $('#pnth-backlite-inputP').val()];
        // var lebars = [$('#pnth-sticker-inputL').val(), $('#pnth-backlite-inputL').val()];
        var lebar = $(this).closest('.produksi').children('.lebar').val();
        if (panjang == '' || panjang == '0') {
            alert('Kolom Panjang Tidak Boleh Kosong');
        }
        if (lebar == '' || lebar == '0') {
            alert('Kolom Lebar Tidak Boleh Kosong');
        }
    });





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
