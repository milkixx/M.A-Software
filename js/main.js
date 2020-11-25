$(function () {

    $(window).on('load', function () {
        $preloader = $('.preloader'),
            $loader = $preloader.find('.prePreloader');
        $loader.fadeOut();
        $preloader.delay(6500).fadeOut('slow');
        $("a[rel='m_PageScroll2id']").mPageScroll2id();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 3200) {
            $('.photo__line').css({
                'width': '100%'
            })

            $('.photo__title').css({
                'transform': 'translateY(0)'
            })

        } else if ($(this).scrollTop() < 3200) {
            $('.photo__line').css({
                'width': '0'
            })

            $('.photo__title').css({
                'transform': 'translateY(100px)'
            })
        }
    });

    if (window.matchMedia("(max-width: 768px)").matches) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 2000) {
                $('.photo__line').css({
                    'width': '100%'
                })

                $('.photo__title').css({
                    'transform': 'translateY(0)'
                })

            } else if ($(this).scrollTop() < 2000) {
                $('.photo__line').css({
                    'width': '0'
                })

                $('.photo__title').css({
                    'transform': 'translateY(100px)'
                })
            }
        });
    }
});