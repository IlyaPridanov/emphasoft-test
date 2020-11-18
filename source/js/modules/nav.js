'use strict';

(function() {
    const body = document.body;
    const nav = document.querySelector('.nav');
    const mainPage = document.querySelectorAll('.main__page');
    const blockBtn = document.querySelectorAll('.js-block-btn');
    const btnHamburger = document.querySelector('.header__hamburger');
    const tab = document.querySelectorAll('.nav__button');

    let wheelFlag = true;

    // mainPage.forEach((page , index, pageArr) => {
    //     page.addEventListener('wheel', function(evt) {
    //         if (wheelFlag) {
    //             if(evt.deltaY > 0) {
    //                 if (pageArr[index + 1]) {
    //                     pageArr[index + 1].classList.remove('js-next-block');
    //                     page.classList.add('js-prev-block');
    //                 }
    //             }
    //             if(evt.deltaY < 0) {
    //                 if (pageArr[index - 1]) {
    //                     pageArr[index - 1].classList.remove('js-prev-block');
    //                     page.classList.add('js-next-block');
    //                 }
    //             }
    //         }
    //         wheelFlag = false;
    //         setTimeout(() => {
    //             wheelFlag = true;
    //         } , 200)
    //     });
    // })

    blockBtn.forEach((btn) => {
        btn.addEventListener('click' , () => {
            mainPage.forEach((page , index, pageArr) => {
                if (btn.dataset.block === page.dataset.block) {
                    page.classList.remove('js-next-block');
                    page.classList.remove('js-prev-block');
                    page.classList.add('js-center-block');
                    if (pageArr[index + 1]) {
                        pageArr[index + 1].classList.add('js-next-block');
                        pageArr[index + 1].classList.remove('js-center-block');
                    }
                    if (pageArr[index - 1]) {
                        pageArr[index - 1].classList.add('js-prev-block');
                        pageArr[index - 1].classList.remove('js-center-block');
                    }
                    if (page.dataset.block === 'main') {
                        btnHamburger.classList.add('hidden');
                        nav.classList.add('hidden');
                    } else {
                        btnHamburger.classList.remove('hidden');
                        nav.classList.remove('hidden');
                    }
                }
            })
        })
    })
}());
