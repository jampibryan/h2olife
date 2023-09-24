
// Función para mostrar el menú responsivo
let x = document.getElementById("menu-navegacion")

function responsiveMenu() {
    (x.className === "") ? x.className = "responsive" : x.className = ""
}


/* Función para cambiar la apariencia visual del menú de navegación y ocultarlo(menú) cuando el usuario selecciona una opción */

function seleccionar(link) {
    let opciones = document.querySelectorAll("#links a");
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    let x = document.getElementById("nav");
    x.className = "";
}


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