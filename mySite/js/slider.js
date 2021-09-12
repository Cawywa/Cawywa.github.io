
/////////////////Отзывы/////////////////////
let slideIndex = 1;
showSlide(slideIndex);
let intr = setInterval(slideAutoListening, 7500);

function restartAutoSlide() {
    clearInterval(intr);
    intr = setInterval(slideAutoListening, 7500);
}
function slideAutoListening() {
    showSlide(++slideIndex);
}

function changeSlide(n) {
    showSlide(slideIndex += n);
    restartAutoSlide();
}

function currentSlide(n) {
    showSlide(slideIndex = n);
    restartAutoSlide();
}

function showSlide(n) {
    let slides = $('.my-slide');
    let dots = $('.control-circle');
    let size = slides.length;
    
    if (n < 1) { slideIndex = size; }
    if (n > size) { slideIndex = 1; }
    for (let i = 0; i < size; i++) {
        $(slides[i]).css('display','none');
        $(dots[i]).removeClass('slide_active');
    }
    $(slides[slideIndex - 1]).css('display','block');
    $(dots[slideIndex - 1]).addClass('slide_active');
}