const controlBtns = document.querySelectorAll('[data-controls]');
let currentItem = 1;

controlBtns.forEach(btn => btn.addEventListener('click', () => {
    const items = btn.closest('[data-category]')
                     .querySelector('[data-items]');

    let numbOfItems = items.querySelectorAll('.item').length;
    console.log(numbOfItems, currentItem);

    if (btn.dataset.controls === 'next') {
        currentItem = currentItem + 1;
        items.style.transform += 'translateX(-100%)';
    }

    // if (btn.dataset.controls === 'prev') items.style.transform += 'translateX(100%)';
    // if (btn.dataset.controls === 'next') items.style.transform += 'translateX(-100%)';
    

}));




console.log(controlBtns);