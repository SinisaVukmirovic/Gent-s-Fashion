const controlBtns = document.querySelectorAll('[data-controls]');

controlBtns.forEach(btn => btn.addEventListener('click', () => {
    const step = btn.dataset.controls === 'next' ? 1 : -1;

    const items = btn.closest('[data-category]')
                     .querySelector('[data-items]');

    let numbOfItems = items.querySelectorAll('.item').length;
    
    let activeSlide = items.querySelector('[data-active]');
    
    let activeIndex = [...items.children].indexOf(activeSlide) + step;

    items.children[activeIndex].dataset.active = 'true';
    delete activeSlide.dataset.active;

    if (btn.dataset.controls === 'next') {
        btn.parentElement.querySelector('.pointer-left').classList.remove('hide');
        
        if (activeIndex == numbOfItems - 1) btn.parentElement.querySelector('.pointer-right').classList.add('hide'); 

        items.style.transform += 'translateX(-100%)';
    }
    
    if (btn.dataset.controls === 'prev') {
        btn.parentElement.querySelector('.pointer-right').classList.remove('hide');

        if (activeIndex == 0) btn.parentElement.querySelector('.pointer-left').classList.add('hide'); 

        items.style.transform += 'translateX(100%)';  
    }     
}));
