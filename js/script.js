const controlBtns = document.querySelectorAll('[data-controls]');

controlBtns.forEach(btn => btn.addEventListener('click', () => {
    const items = btn.closest('[data-category]')
                     .querySelector('[data-items]');

    if (btn.dataset.controls === 'prev') items.style.transform += 'translateX(100%)';
    if (btn.dataset.controls === 'next') items.style.transform += 'translateX(-100%)';
    

}));




console.log(controlBtns);