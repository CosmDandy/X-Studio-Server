// function downloadPage() {
//
// }

function menuScroll() {
    let menu = $('#menu-wrapper')
    if (window.scrollY > 100) {
        menu.css('margin', '0em');
        menu.css('padding', '0.5em 2em 0.3em');
    } else {
        menu.css('margin', '1.5em 2em');
        menu.css('padding', '0em 1em 1em');
    }

    if (window.scrollY > 250) {
        menu.css('background-color', 'rgb(95 95 95 / 50%)');
        menu.css('backdrop-filter', 'saturate(180%) blur(10px)');
    } else {
        menu.css('background-color', '#ffffff00');
        menu.css('backdrop-filter', 'None');
    }

    if (window.scrollY > $('#intro').height()) {
        menu.css('background-color', 'rgba(245, 245, 247, 0.8)');
        menu.css('border-bottom', '0.1em solid rgb(0 0 0 / 60%)');
        $('#butt').css('border', 'black solid 0.1em')
        $('#menu h1').css('color', 'black')
        $('#menu a').css('color', 'black')
    } else {
        menu.css('border-bottom', 'white solid 0.1em');
        $('#butt').css('border', 'white solid 0.1em')
        $('#menu h1').css('color', 'white')
        $('#menu a').css('color', 'white')
    }

    if (window.scrollY > $('#intro').height() + $('#about-wrapper').height() + 80 + $('#services-wrapper').height() + 70 + $('#price-list').height() + 64) {
        menu.css('background-color', 'rgb(95 95 95 / 50%)');
        menu.css('border-bottom', 'white solid 0.1em');
        $('#butt').css('border', 'white solid 0.1em')
        $('#menu h1').css('color', 'white')
        $('#menu a').css('color', 'white')
    }

    if (window.scrollY > $('#intro').height() + $('#about-wrapper').height() + 80 + $('#services-wrapper').height() + 70 + $('#price-list').height() + 64 + $('#example-wrapper').height() + 70) {
        menu.css('background-color', 'rgba(245, 245, 247, 0.8)');
        menu.css('border-bottom', '0.1em solid rgb(0 0 0 / 60%)');
        $('#butt').css('border', 'black solid 0.1em')
        $('#menu h1').css('color', 'black')
        $('#menu a').css('color', 'black')
    }

}

function menuHighlite() {
    if (window.scrollY > $('#intro').height() - 60) {
        $('#sub-nav1').css('background-color', 'rgb(162 162 162 / 25%)');
        // $('#menu-wrapper').css('background-color', 'rgba(245, 245, 247, 0.8)');
        // $('#menu a, #menu h1').css('color', 'black');
        // $('#menu button').css('border-color', 'black');
        // $('#menu button:hover').css('background-color', 'rgb(95 95 95 / 18%)');
    } else {
        $('#sub-nav1').css('background-color', '#ffffff00');
        // $('#menu a, #menu h1').css('color', 'white');
        // $('#menu button').css('border-color', 'white');
    }

    if (window.scrollY > $('#intro').height() + $('#about-wrapper').height() + 80) {
        $('#sub-nav1').css('background-color', '#ffffff00');
        $('#sub-nav2').css('background-color', 'rgb(162 162 162 / 25%)');
    } else {
        $('#sub-nav2').css('background-color', '#ffffff00');
    }

    if (window.scrollY > $('#intro').height() + $('#about-wrapper').height() + 80 + $('#services-wrapper').height() + 70 + $('#price-list').height() + 64) {
        $('#sub-nav1').css('background-color', '#ffffff00');
        $('#sub-nav2').css('background-color', '#ffffff00');
        $('#sub-nav3').css('background-color', 'rgb(162 162 162 / 25%)');
    } else {
        $('#sub-nav3').css('background-color', '#ffffff00');
    }

    if (window.scrollY > $('#intro').height() + $('#about-wrapper').height() + 80 + $('#services-wrapper').height() + 70 + $('#price-list').height() + 64 + $('#example-wrapper').height() + 70) {
        $('#sub-nav1').css('background-color', '#ffffff00');
        $('#sub-nav2').css('background-color', '#ffffff00');
        $('#sub-nav3').css('background-color', '#ffffff00');
        $('#sub-nav4').css('background-color', 'rgb(162 162 162 / 25%)');
    } else {
        $('#sub-nav4').css('background-color', '#ffffff00');
    }

    if (window.scrollY > $('#intro').height() + $('#about-wrapper').height() + 80 + $('#services-wrapper').height() + 70 + $('#price-list').height() + 64 + $('#example-wrapper').height() + 70 + $('#reviews-wrapper').height() + 64) {
        $('#sub-nav1').css('background-color', '#ffffff00');
        $('#sub-nav2').css('background-color', '#ffffff00');
        $('#sub-nav3').css('background-color', '#ffffff00');
        $('#sub-nav4').css('background-color', '#ffffff00');
        $('#sub-nav5').css('background-color', 'rgb(162 162 162 / 25%)');
    } else {
        $('#sub-nav5').css('background-color', '#ffffff00');
    }

    if (window.scrollY > document.querySelector('body').offsetHeight - $('#footer-wrapper').height() - 600) {
        $('#sub-nav1').css('background-color', '#ffffff00');
        $('#sub-nav2').css('background-color', '#ffffff00');
        $('#sub-nav3').css('background-color', '#ffffff00');
        $('#sub-nav4').css('background-color', '#ffffff00');
        $('#sub-nav5').css('background-color', '#ffffff00');
        $('#sub-nav6').css('background-color', '§');
    } else {
        $('#sub-nav6').css('background-color', '#ffffff00');
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
    // document.getElementById('test').innerHTML = document.querySelector('body').offsetHeight - $('#footer-wrapper').height();
}

function navScroll() {
    $('.navScroll a').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 370,   // по умолчанию «400»
            easing: "linear" // по умолчанию «swing»
        });

        return false;
    });
}

function musicPlayPause(src, id) {
    let radio = new Audio();
    radio.src = src;
    document.querySelector('.play1').onclick = function () {
        if (radio.paused === true) {
            radio.play();
            document.getElementById(id).src = "pause.png";
        } else {
            radio.pause();
            document.getElementById(id).src = "play-button-arrowhead.png";
        }
    }
}

$(window).scroll(function () {
    menuScroll();
    menuHighlite();
    aboutToFix();
    aboutScrollChange();
    aboutDate();
});
