
const slider = document.querySelectorAll('.slider');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

function updateSlide() {
    slider.forEach((slide) => slide.classList.remove('active'));
    slider[activeSlide].classList.add('active');
    

    leftBtn.disabled = activeSlide === 0; //operación ternaria
    rightBtn.disabled = activeSlide === slider.length - 1;
}

rightBtn.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slider.length; //índices cíclicos
    updateSlide();
});

leftBtn.addEventListener('click', () => {
    activeSlide = (activeSlide - 1 + slider.length) % slider.length;
    updateSlide();
});

updateSlide();
