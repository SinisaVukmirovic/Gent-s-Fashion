const controlBtns = document.querySelectorAll('[data-controls]');

controlBtns.forEach(btn => btn.addEventListener('click', () => {
    // if (btn.classList.contains('hide')) console.log('sdf')
    // btn.classList.remove('hide');
    // console.log(btn.dataset.controls == 'next')


    const step = btn.dataset.controls === 'next' ? 1 : -1;

    const items = btn.closest('[data-category]')
                     .querySelector('[data-items]');

    let numbOfItems = items.querySelectorAll('.item').length;
    console.log(numbOfItems);

    let activeSlide = items.querySelector('[data-active]');
    // console.log(activeSlide)
    let activeIndex = [...items.children].indexOf(activeSlide) + step;

    if (activeIndex === numbOfItems - 1) {
        btn.classList.add('hide');
    } 
    if (activeIndex >= 1) {
        
        btn.classList.remove('hide');
    }   

    items.children[activeIndex].dataset.active = 'true';
    delete activeSlide.dataset.active;

    console.log(activeIndex)

    // if (activeIndex === numbOfItems) btn.classList.add('hide');


    if (btn.dataset.controls === 'next') items.style.transform += `translateX(-100%)`;
    if (btn.dataset.controls === 'prev') items.style.transform += `translateX(100%)`;


    // if (btn.dataset.controls === 'next') {
    //     currentItem = currentItem + 1;
    //     items.style.transform += 'translateX(-100%)';
    // }

    // if (btn.dataset.controls === 'prev') items.style.transform += 'translateX(100%)';
    // if (btn.dataset.controls === 'next') items.style.transform += 'translateX(-100%)';
    

}));
