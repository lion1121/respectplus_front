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


        } else {
            $('#sticky_box').removeClass('sticky') ;
            $('#logo_box').addClass('header_logo_box').removeClass('sticky_header_logo_box');
            $('.custom_heater_form').css('margin','11px 0 16px 0');
            $('.mega_menu_hover_line:hover:after').css('bottom','0');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});