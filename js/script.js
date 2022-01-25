document.addEventListener('DOMContentLoaded', function() {
    const MENU_NAV = document.querySelector('.menu__nav');
    const BUTTON_MENU = MENU_NAV.querySelector('.button-menu');
    console.log(BUTTON_MENU);
    BUTTON_MENU.addEventListener('click', function() {
        MENU_NAV.classList.toggle('menu__nav--active');
    })
});