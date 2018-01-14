/**
 * Created by Сергей on 09.01.2018.
 */
$(document).ready(function() {
    var stickyNavTop = $('#sticky_box').height();
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {

            $('#sticky_box').addClass('sticky');
            $('#logo_box').addClass('sticky_header_logo_box').removeClass('header_logo_box');
            $('#custom_heater_form').addClass('custom_heater_form_sticky');
            $('.main_index_img').css('margin-top','44px');


        } else {
            $('#sticky_box').removeClass('sticky') ;
            $('#logo_box').addClass('header_logo_box').removeClass('sticky_header_logo_box');
            $('.custom_heater_form').css('margin','11px 0 16px 0');
            $('.mega_menu_hover_line:hover:after').css('bottom','0');
            $('.main_index_img').css('margin-top','0');

        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});

$('.last_property_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots:false,
    appendArrows:".arrows_box",
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(document).ready(function () {
   $('.list_box').click(function() {
       if($(this).children('.list_switcher').hasClass('fa-minus')) {
           $(this).children('.list_switcher').removeClass('fa-minus');
           $(this).children('.list_switcher').addClass('fa-plus');
       } else {
           $(this).children('.list_switcher').addClass('fa-minus');
           $(this).children('.list_switcher').removeClass('fa-plus');
       }

       $(this).children('.list_advantage').toggle('slow');
   });
});


$(document).ready(function () {
   $('.menu_btn').click(function () {
      $(this).toggleClass('change');
      $('.main_nav').toggleClass('display_flex');
   });
});