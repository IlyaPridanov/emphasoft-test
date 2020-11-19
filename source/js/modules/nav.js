'use strict';

(function() {
    const btn = document.querySelector('.hamburger');
    const menu = document.querySelector('.js-block');

    btn.addEventListener('click' , () => {
        menu.classList.toggle('js-block-inactive');
        btn.classList.toggle('js-btn-active');
    })
}());
