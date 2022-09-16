// function downloadPage() {
//
// }

function menuScroll() {
    let root = $(':root');
    let menu = $('#menu-wrapper');
    let menu_button = $('#menu button');
    let intro = $('#intro');
    let about_wrapper = $('#about-wrapper');
    let services_wrapper = $('#services-wrapper');
    let price_list = $('#price-list');
    let example_wrapper = $('#example-wrapper');

    if (window.scrollY > 100) {
        menu.css({
            'margin': '0em',
            'padding': '0.5em 2em',
            'backdrop-filter': 'saturate(100%) blur(15px)'
        });
    } else {
        menu.css({
            'margin': '1em 2em',
            'padding': '0em 1em 1em',
            'backdrop-filter': 'none'
        });
    }

    if (window.scrollY > intro.height()) {
        menu.css({
            'background-color': 'rgba(245, 245, 247, 0.5)',
            'border-bottom': '0.1em solid rgb(0 0 0 / 60%)'
        });
        root.css('--theme-color', 'black');
        menu_button.css('outline-color', 'black solid 0.2em');
    } else {
        menu.css({
            'background-color': '#ffffff00',
            'border-bottom': 'white solid 0.1em'
        });
        root.css('--theme-color', 'white');
        menu_button.css('outline-color', 'white solid 0.2em');
    }

    if (window.scrollY > intro.height() + about_wrapper.height() + 80 + services_wrapper.height() + 70 + price_list.height() + 64) {
        menu.css({
            'background-color': 'rgba(95, 95, 95, 0.6)',
            'border-bottom': 'white solid 0.1em'
        });
        root.css('--theme-color', 'white');
    }

    if (window.scrollY > intro.height() + about_wrapper.height() + 80 + services_wrapper.height() + 70 + price_list.height() + 64 + example_wrapper.height() + 70) {
        menu.css({
            'background-color': 'rgba(245, 245, 247, 0.5)',
            'border-bottom': '0.1em solid rgb(0 0 0 / 60%)'
        });
        root.css('--theme-color', 'black');
    }

}

function menuHighlite() {
    let intro = $('#intro');
    let about_wrapper = $('#about-wrapper');
    let services_wrapper = $('#services-wrapper');
    let price_list = $('#price-list');
    let example_wrapper = $('#example-wrapper');
    let reviews_wrapper = $('#reviews-wrapper');

    if (window.scrollY > intro.height() - 60) {
        $('#sub-nav1').css('outline', 'var(--theme-color) 0.2em solid');
    } else {
        $('#sub-nav1').css('outline', '#ffffff00 0.2em solid');
    }

    if (window.scrollY > intro.height() + about_wrapper.height() + 80) {
        $('#sub-nav1').css('outline', '#ffffff00 0.2em solid');
        $('#sub-nav2').css('outline', 'var(--theme-color) 0.2em solid');
    } else {
        $('#sub-nav2').css('outline', '#ffffff00 0.2em solid');
    }

    if (window.scrollY > intro.height() + about_wrapper.height() + 80 + services_wrapper.height() + 70 + price_list.height() + 64) {
        $('#sub-nav1, #sub-nav2').css('outline', '#ffffff00 0.2em solid');
        $('#sub-nav3').css('outline', 'var(--theme-color) 0.2em solid');
    } else {
        $('#sub-nav3').css('outline', '#ffffff00 0.2em solid');
    }

    if (window.scrollY > intro.height() + about_wrapper.height() + 80 + services_wrapper.height() + 70 + price_list.height() + 64 + example_wrapper.height() + 70) {
        $('#sub-nav1, #sub-nav2, #sub-nav3').css('outline', '#ffffff00 0.2em solid');
        $('#sub-nav4').css('outline', 'var(--theme-color) 0.2em solid');
    } else {
        $('#sub-nav4').css('outline', '#ffffff00 0.2em solid');
    }

    if (window.scrollY > intro.height() + about_wrapper.height() + 80 + services_wrapper.height() + 70 + price_list.height() + 64 + example_wrapper.height() + 70 + reviews_wrapper.height() + 64) {
        $('#sub-nav1, #sub-nav2, #sub-nav3, #sub-nav4').css('outline', '#ffffff00 0.2em solid');
        $('#sub-nav5').css('outline', 'var(--theme-color) 0.2em solid');
    } else {
        $('#sub-nav5').css('outline', '#ffffff00 0.2em solid');
    }

    if (window.scrollY > document.querySelector('body').offsetHeight - $('#footer-wrapper').height() - 600) {
        $('#sub-nav1, #sub-nav2, #sub-nav3, #sub-nav4, #sub-nav5').css('outline', '#ffffff00 0.2em solid');
        $('#sub-nav6').css('outline', 'var(--theme-color) 0.2em solid');
    } else {
        $('#sub-nav6').css('outline', '#ffffff00 0.2em solid');
    }
}

// function smoothAppear() {
//
// }

function aboutToFix() {
    let element1 = document.querySelector("#about-cont-1");
    let element2 = document.querySelector("#about-cont-2");
    let element3 = document.querySelector("#about-cont-3");
    let element4 = document.querySelector("#about-cont-4");

    let element = "#about-img";
    let c_element = "#about img";
    let pos_start = $(element).offset().top;
    let pos_end = $('#intro').height() + $('#about-wrapper').height() - $('#about img').height() - 160 + 53;
    if (window.scrollY < pos_start - 200) {
        element1.style.paddingTop = 200 + "px";
        element2.style.paddingTop = 200 + "px";
        element3.style.paddingTop = 200 + "px";
        element4.style.paddingTop = 200 + "px";
    }

    if (window.scrollY > pos_start) {
        $(c_element).css('position', 'fixed');
        $(c_element).css('top', '0');
    } else {
        $(c_element).css('position', 'absolute');
        $(c_element).css('top', 'inherit');
    }

    if (window.scrollY > pos_end) {
        element1.style.paddingTop = 0 + "px";
        element2.style.paddingTop = 0 + "px";
        element3.style.paddingTop = 0 + "px";
        element4.style.paddingTop = 0 + "px";
        $(c_element).css('position', 'absolute');
        $(c_element).css('bottom', '0');
        $(c_element).css('top', 'inherit');
    } else {
        $(c_element).css('bottom', 'inherit');
    }
}

function aboutScrollChange() {
    let value = window.scrollY;
    let element1 = document.querySelector("#about-cont-1");
    let element2 = document.querySelector("#about-cont-2");
    let element3 = document.querySelector("#about-cont-3");
    let element4 = document.querySelector("#about-cont-4");
    let padding1 = $('#intro').height() - value;
    let padding2 = padding1 + $('#about-cont-1').height();
    let padding3 = padding2 + $('#about-cont-2').height();
    let padding4 = padding3 + $('#about-cont-3').height();
    if (200 > padding1) {
        element1.style.paddingTop = padding1 + "px";
        element2.style.paddingTop = padding2 + "px";
        element3.style.paddingTop = padding3 + "px";
        element4.style.paddingTop = padding4 + "px";
    }
}

function aboutDate() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('date1').innerHTML = year - 1999;
    document.getElementById('date2').innerHTML = year;
}

// function navScroll() {
//     $('.navScroll a').on('click', function () {
//
//         let href = $(this).attr('href');
//
//         $('html, body').animate({
//             scrollTop: $(href).offset().top
//         }, {
//             duration: 370,   // по умолчанию «400»
//             easing: "linear" // по умолчанию «swing»
//         });
//
//         return false;
//     });
// }

// function musicPlayPause(src, id) {
//     let radio = new Audio();
//     radio.src = src;
//     document.querySelector('.play1').onclick = function () {
//         if (radio.paused === true) {
//             radio.play();
//             document.getElementById(id).src = "pause.png";
//         } else {
//             radio.pause();
//             document.getElementById(id).src = "play-butt-inneron-arrowhead.png";
//         }
//     }
// }

$(window).scroll(function () {
    menuScroll();
    menuHighlite();
    aboutToFix();
    aboutScrollChange();
    aboutDate();
});

// document.getElementById('test').innerHTML = document.querySelector('body').offsetHeight - $('#footer-wrapper').height();
