$(window).scroll(function () {
    if (window.scrollY > 100) {
        $('.header').css('padding', '0');
    } else if (window.scrollY < 100) {
        $('.header').css('padding', '5px 0');
    }

    if (window.scrollY > 300) {
        $('.intro').css('background-color', 'rgba(45, 45, 45, 0.8)');
    } else if (window.scrollY < 300) {
        $('.intro').css('background-color', 'rgba(45, 45, 45, 0.2)');
    }

    if (window.scrollY < (window.screen.height + (document.querySelector('.our-history').offsetHeight - 160))) {
        $('.header').css('background-color', 'rgba(52, 52, 52, 0.9)');
        $('div.submenu a').css('color', 'white');
        $('.logo img').css('filter', 'invert(0)');
    }

    if (window.scrollY > (window.screen.height + (document.querySelector('.our-history').offsetHeight - 160))) {
        $('.header').css('background-color', 'rgba(245,245,247,0.8)');
        $('div.submenu a').css('color', 'black');
        $('.logo img').css('filter', 'invert(1)');

    }

    if (window.scrollY > (window.screen.height + 2770)) {
        $('.header').css('background-color', 'rgba(52,52,52,0.9)');
        $('div.submenu a').css('color', 'white');
        $('.logo img').css('filter', 'invert(0)');
    }
});
