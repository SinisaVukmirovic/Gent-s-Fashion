const controlBtns = document.querySelectorAll('[data-controls]');
let currentItem = 1;

controlBtns.forEach(btn => btn.addEventListener('click', () => {
    const step = btn.dataset.controls === 'next' ? 1 : -1;

    const items = btn.closest('[data-category]')
                     .querySelector('[data-items]');

    // let numbOfItems = items.querySelectorAll('.item').length;
    // console.log(numbOfItems, currentItem);

    let activeSlide = items.querySelector('[data-active]');
    console.log(activeSlide)

    let activeIndex = [...items.children].indexOf(activeSlide) + step;

    items.children[activeIndex].dataset.active = 'true';
    delete activeSlide.dataset.active;

    console.log(activeIndex)


    if (btn.dataset.controls === 'next') items.style.transform += `translateX(-100%)`;
    if (btn.dataset.controls === 'prev') items.style.transform += `translateX(100%)`;


    // if (btn.dataset.controls === 'next') {
    //     currentItem = currentItem + 1;
    //     items.style.transform += 'translateX(-100%)';
    // }

    // if (btn.dataset.controls === 'prev') items.style.transform += 'translateX(100%)';
    // if (btn.dataset.controls === 'next') items.style.transform += 'translateX(-100%)';
    

}));




console.log(controlBtns);