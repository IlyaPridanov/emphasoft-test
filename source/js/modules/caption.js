'use strict';

(function() {
    const caption = document.querySelectorAll('.js-caption');
    const bodyHeight = document.documentElement.clientHeight;

    // Функция для извлечения координаты элемента
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        let top;

        return top = box.top + pageYOffset;
    }

    caption.forEach((item) => {
        if (bodyHeight > getCoords(item)) {
            item.classList.add('js-caption-active')
        }
    })

    window.addEventListener('scroll' , () => {
        // Координата низа окна браузера
        let top = -1 * document.documentElement.getBoundingClientRect().top + bodyHeight;

        caption.forEach((item) => {
            if (top >= getCoords(item)) {
                item.classList.add('js-caption-active');
            }
        })
    })
}());
