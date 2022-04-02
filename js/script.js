const controlBtns = document.querySelectorAll('[data-controls]');

const headerElem = document.querySelector('header');

const cardigansSection = document.querySelector('#cardigans');
const watchesSection = document.querySelector('#watches');

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

const intObsOptions = {
    rootMargin: '-350px'
};

const cardigansSectionObs = new IntersectionObserver((entries, intObsOptions) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            headerElem.classList.add('cardigans-section');
        }
        else {
            headerElem.classList.remove('cardigans-section');
        }
    });
}, intObsOptions);

cardigansSectionObs.observe(cardigansSection);

const watchesSectionObs = new IntersectionObserver((entries, intObsOptions) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            headerElem.classList.add('watches-section');
        }
        else {
            headerElem.classList.remove('watches-section');
        }
    });
}, intObsOptions);

watchesSectionObs.observe(watchesSection);


document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.querySelector('.intro-screen');
    
    setTimeout(() => {
        introScreen.parentNode.removeChild(introScreen);
    }, 6000);
});