"use strict"

let screenWidth = $(window).width();
let valueList = [120, 4600, 340, 23];
let animationStarted = false;
let imageChanged = false;
//setTimeout(function() {
//    $('.call-modal').click();
//}, 15000);

if (screenWidth >= 992) {
    $('.skills__row').css('opacity','0');
} else {
    $('.stats__column:nth-child(1) .stats-item__title').text(valueList[0]);
    $('.stats__column:nth-child(2) .stats-item__title').text(valueList[1]);
    $('.stats__column:nth-child(3) .stats-item__title').text(valueList[2]);
    $('.stats__column:nth-child(4) .stats-item__title').text(valueList[3]);
}

$(document).ready(() => {
//animate__animated animate__backInLeft
    let newImage = "img/about/about__photo.jpg";
//    $("#inputPhone").mask("+7-(999)-999-9999");

    $('.modal__form').submit(function() {
        $('.letter-send').text("");
        if ($('#inputEmail').val() == "" || $('#inputPhone').val() == "") {
            event.preventDefault();
            $('.hint').text("Проверьте корректность данных!");
            shakeHint($('.hint'));
        } else {
            $('.hint').text("");
        }
    });
    
//    $('.modal__form').submit(function() {
//        $('.letter-send').text("");
//        event.preventDefault();
//        if ($('#inputEmail').val() == "" || $('#inputPhone').val() == "") {
//            $('.hint').text("Проверьте корректность данных!");
//            shakeHint($('.hint'));
//        } else {
//            $('.hint').text("");
//            $.ajax({
//                type: 'POST',
//                url: 'php/mail.php',
//                data: $(this).serialize(),
//            }).done(function() {
//                $('.letter-send').text("Ваши данные успешно отправлены!");
//                $('.modal__form').trigger('reset');
//            });
//            return false;
//        }
//    });
    
    
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop() + $('nav').outerHeight();
        $('.section').each((i, item) => {
                           
            if ($(item).offset().top <= scrollDistance) {
                $('nav a').each((i, item) => {
                    if ($(item).hasClass('active')) {
                        $(item).removeClass('active');
                    }
                });
                $('nav .menu__item:eq(' + i + ')').find('a').addClass('active');
            }
        });
        if (scrollDistance < 940) {
            $('nav .menu__item:first-child a').removeClass('active');
        }
        if ($('.skills__row').offset().top <= scrollDistance + 900 && screenWidth >= 992) {
            $('.skills__row').addClass('skills-animation');
        }
        if ($('.stats__row').offset().top <= scrollDistance + 630 && screenWidth >= 992 && !animationStarted) {
            statsAnimate();
        }
        if ($('.about__photo').offset().top <= scrollDistance + 600 && screenWidth >= 992 && !imageChanged) {
            $('.about__photo img').attr('src', newImage);
            imageChanged = true;
        }
        
        
    });
    $('.image-link').magnificPopup({type:'image'});
});

function statsAnimate() {
    
    animationStarted = true;
    let done = false;
    let stats1 = 0,
        stats2 = 0,  //Числа 
        stats3 = 0,
        stats4 = 0;
    let timer = setInterval(valueIncrement, 5);

    function valueIncrement() {
        if (stats1 <= valueList[0]) {
            $('.stats__column:nth-child(1) .stats-item__title').text(stats1);
        }
        if (stats2 <= valueList[1]) {
            $('.stats__column:nth-child(2) .stats-item__title').text(stats2);
        } else {
            done = true;
        }
        if (stats3 <= valueList[2]) {
            $('.stats__column:nth-child(3) .stats-item__title').text(stats3);
        }
        if (stats4 <= valueList[3]) {
            $('.stats__column:nth-child(4) .stats-item__title').text(stats4);
        }

        stats1 += 1;
        stats2 += 23;
        stats3 += 2;
        stats4 += 1;
        if (done) clearInterval(timer);
    }
}
function scrollToCost() {
    let h = $('#cost').offset().top;
    window.scrollTo(0, h);
}
function shakeHint(el) {
    $(el).addClass('animate__animated animate__shakeY');
    setTimeout(function() {
        $(el).removeClass('animate__animated animate__shakeY')}
               , 600);
}

