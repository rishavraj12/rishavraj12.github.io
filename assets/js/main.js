!(function($) {
    "use strict";

    $( document ).ready( function() {
        
        var entries = [ 
            
            { label: 'JavaScript' },
            { label: 'jQuery'},
            { label: 'HTML' },
            { label: 'CSS'},
            { label: 'Bootstrap'},
            { label: 'Node js' },
            { label: 'Express js'},
            { label: 'Embedded js'},
            { label: 'VLSI' },
            { label: 'Python' },
            { label: 'Verilog' },
            { label: 'Electronics' },
            { label: 'Processors'},
            { label: 'npm' },
            { label: 'GIT' },
            { label: 'STA' },
            { label: '3d Design'},
            { label: 'OOPS' },
            { label: 'Simulation'},
            { label: 'Robotics'},



        ];

        var settings = {

            entries: entries,
            width: 550,
            height: 850,
            radius: '70%',
            radiusMin: 75,
            bgDraw: true,
            bgColor: '#000',
            opacityOver: 1.00,
            opacityOut: 0.1,
            opacitySpeed: 6,
            fov: 800,
            speed: 1,
            fontFamily: 'Oswald, Arial, sans-serif',
            fontSize: '1rem',
            fontColor: '#08fdd8',
            fontWeight: 'bold',//bold
            fontStyle: 'normal',//italic 
            fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            fontToUpperCase: false,
            tooltipFontFamily: 'Oswald, Arial, sans-serif',
            tooltipFontSize: '11',
            tooltipFontColor: '#fff',
            tooltipFontWeight: 'normal',//bold
            tooltipFontStyle: 'normal',//italic 
            tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            tooltipFontToUpperCase: false,
            tooltipTextAnchor: 'left',
            tooltipDiffX: 0,
            tooltipDiffY: 10

        };

        //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
        $( '#holder' ).svg3DTagCloud( settings );

} );


    // Nav Menu
    $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var hash = this.hash;
            var target = $(hash);
            if (target.length) {
                e.preventDefault();

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if (hash == '#header') {
                    $('#header').removeClass('header-top');
                    $("section").removeClass('section-show');
                    return;
                }

                if (!$('#header').hasClass('header-top')) {
                    $('#header').addClass('header-top');
                    setTimeout(function() {
                        $("section").removeClass('section-show');
                        $(hash).addClass('section-show');
                    }, 350);
                } else {
                    $("section").removeClass('section-show');
                    $(hash).addClass('section-show');
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

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).click(function(e) {
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




    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Skills section
    $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    // Porfolio isotope and filter
    $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
        $('.venobox').venobox();
    });

})(jQuery);

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });







