// function downloadPage() {
//
// }

function disappear() {
    let bg = document.querySelector("#intro");
    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        if (value > 400) {
            bg.style.backgroundSize = 400 + value * 2 + "px";
        } else {
        }
    })
}

let intro = document.querySelector(".intro-content");
window.addEventListener("scroll", function () {
    let value = window.scrollY;
    intro.style.backgroundSize = 700 + value * 2 + "px";
})

function menuScroll() {
    if (window.scrollY > 100) {
        $('#menu').css('margin', '0em');
        $('#menu').css('padding', '0.5em 2em 0.3em');
    } else {
        $('#menu').css('margin', '1.5em 2em');
        $('#menu').css('padding', '0em 1em 1em');
    }

    if (window.scrollY > 250) {
        $('#menu').css('background-color', 'rgb(95 95 95 / 50%)');
        $('#menu').css('backdrop-filter', 'saturate(180%) blur(10px)');
    } else {
        $('#menu').css('background-color', '#ffffff00');
        $('#menu').css('backdrop-filter', 'None');
    }
}

function menuHighlite() {
    if (window.scrollY > 100) {
        $('#sub-nav1').css('background-color', 'rgba(238, 238, 238, 0.23)');
    } else {
        $('#sub-nav1').css('background-color', '#ffffff00');
    }

    if (window.scrollY > 200) {
        $('#sub-nav2').css('background-color', 'rgba(238, 238, 238, 0.23)');
    } else {
        $('#sub-nav2').css('background-color', '#ffffff00');
    }

    if (window.scrollY > 300) {
        $('#sub-nav3').css('background-color', 'rgba(238, 238, 238, 0.23)');
    } else {
        $('#sub-nav3').css('background-color', '#ffffff00');
    }

    if (window.scrollY > 400) {
        $('#sub-nav4').css('background-color', 'rgba(238, 238, 238, 0.23)');
    } else {
        $('#sub-nav4').css('background-color', '#ffffff00');
    }

    if (window.scrollY > 500) {
        $('#sub-nav5').css('background-color', 'rgba(238, 238, 238, 0.23)');
    } else {
        $('#sub-nav5').css('background-color', '#ffffff00');
    }

    if (window.scrollY > 600) {
        $('#sub-nav6').css('background-color', 'rgba(238, 238, 238, 0.23)');
    } else {
        $('#sub-nav6').css('background-color', '#ffffff00');
    }
}

function smoothAppear() {
    if (window.scrollY > 250) {
        $('#about-us').css('opacity', '1');
    } else {
        $('#about-us').css('opacity', '0');
    }

    if (window.scrollY > 270) {
        $('#about-us-header').css('opacity', '1');
    } else {
        $('#about-us-header').css('opacity', '0');
    }

    if (window.scrollY > 400) {
        $('.about-us-mini').css('opacity', '1');
    } else {
        $('.about-us-mini').css('opacity', '0');
    }
}

$(window).scroll(function () {
    menuScroll();
    // menuHighlite();
    // disappear()
    smoothAppear();
});
