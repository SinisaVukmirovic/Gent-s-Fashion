const controlBtns = document.querySelectorAll('[data-controls]');

controlBtns.forEach(btn => btn.addEventListener('click', () => {
    const items = btn.closest('[data-category]')
                     .querySelector('[data-items]');
    console.log(items);
}));




console.log(controlBtns);