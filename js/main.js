; /* Let's make sure all functions close before we start writing our JS code */
(function($, window, document) {
    //'use strict'; // I ♥ JS

    // check devices with device.js
    var isMobile, isTablet;
    if (typeof device === 'object') {
        isMobile = device.mobile();
        isTablet = device.tablet();
    }

    // jQuery stuff goes here

    /**
     * Handlers for navigation, accessibility, header sizing
     */
//    var body = $('body'),
//            _window = $(window);

    // Enable menu toggle for small screens.
    (function() {
        var nav = $('#nav'), button, menu;
        if (!nav) {
            return;
        }

        button = nav.find('#menu-toggle');
        if (!button) {
            return;
        }

        // Hide button if menu is missing or empty.
        menu = nav.find('#menu');
        if (!menu || !menu.children().length) {
            button.hide();
            return;
        }

        button.on('click', function() {
//   @todo: fix slide toggle, if toggled off on 480 and resized to 480+
            nav.toggleClass('toggled-on');
            menu.slideToggle();
        });
    })();

    /*
     * Makes "skip to content" link work correctly in IE9 and Chrome for better
     * accessibility.
     *
     * @link http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
     */
//    _window.on('hashchange', function() {
//        var element = document.getElementById(location.hash.substring(1));
//
//        if (element) {
//            if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
//                element.tabIndex = -1;
//            }
//
//            element.focus();
//
//            // Repositions the window on jump-to-anchor to account for header height.
//            window.scrollBy(0, -80);
//        }
//    });

    // Search toggle.
//    $('.search-toggle').on('click.bigblank', function(event) {
//        var that = $(this),
//                wrapper = $('.search-box-wrapper');
//
//        that.toggleClass('active');
//        wrapper.toggleClass('hide');
//
//        if (that.is('.active') || $('.search-toggle .screen-reader-text')[0] === event.target) {
//            wrapper.find('.search-field').focus();
//        }
//    });

    /*
     * Fixed header for large screen.
     * If the header becomes more than 48px tall, unfix the header.
     *
     * The callback on the scroll event is only added if there is a header
     * image and we are not on mobile.
     */
//    if (_window.width() > 781) {
//        var mastheadHeight = $('#masthead').height(),
//                toolbarOffset, mastheadOffset;
//
//        if (mastheadHeight > 48) {
//            body.removeClass('masthead-fixed');
//        }
//
//        if (body.is('.header-image')) {
//            toolbarOffset = body.is('.admin-bar') ? $('#wpadminbar').height() : 0;
//            mastheadOffset = $('#masthead').offset().top - toolbarOffset;
//
//            _window.on('scroll.bigblank', function() {
//                if ((window.scrollY > mastheadOffset) && (mastheadHeight < 49)) {
//                    body.addClass('masthead-fixed');
//                } else {
//                    body.removeClass('masthead-fixed');
//                }
//            });
//        }
//    }

    // Focus styles for menus.
    $('.primary-navigation, .secondary-navigation').find('a').on('focus blur', function() {
        $(this).parents().toggleClass('focus');
    });



    $(document).on('keydown', function(e) {
        var url = false;

        // Left arrow key code.
        if (e.which === 37) {
            url = $('.previous-image').parent().attr('href');

            // Right arrow key code.
        } else if (e.which === 39) {
            url = $('.next-image').parent().attr('href');
        }

        if (url && (!$('textarea, input').is(':focus'))) {
            window.location = url;
        }
    });


})(window.jQuery, window, window.document);