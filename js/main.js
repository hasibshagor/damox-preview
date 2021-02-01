(function($) {
    "use strict";


    // stycky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('header').addClass('neel');
        } else {
            $('header').removeClass('neel');
        }

    })

})(jQuery);