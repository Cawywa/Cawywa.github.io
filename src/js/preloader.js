function preloader() {
    let el = document.getElementById('body__loader');
    el.classList.add('loaded');
}
window.onload = preloader();
