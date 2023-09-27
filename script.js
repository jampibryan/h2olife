// Función para mostrar el menú responsivo
let x = document.getElementById("menu-navegacion");

function responsiveMenu() {
  x.className === "" ? (x.className = "responsive") : (x.className = "");
}

/* Función para cambiar la apariencia visual del menú de navegación y ocultarlo(menú) cuando el usuario selecciona una opción */

function seleccionar(link) {
  let opciones = document.querySelectorAll("#links a");
  opciones.forEach((opcion) => opcion.classList.remove("seleccionado"));
  link.classList.add("seleccionado");

  x.className = "";
}

/* Detectar la posición del scroll y resaltar los elementos del menú de navegación correspondientes a medida que el usuario se desplaza por la página */

document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos del menú de navegación
  const menuItems = document.querySelectorAll("nav .menu-ul li");

  // Función para resaltar el elemento de menú activo
  function highlightMenuItem() {
    const scrollPosition = window.scrollY + 150; // Obtener la posición actual del scroll verticalmente;

    menuItems.forEach((item) => {
      const sectionId = item
        .querySelector("a")
        .getAttribute("href")
        .substring(1); // Obtener el ID de la sección sin el #
      const section = document.getElementById(sectionId);
      item.querySelector("a").classList.remove("seleccionado");

      if (
        section &&
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        item.querySelector("a").classList.add("seleccionado");
      } else {
        item.querySelector("a").classList.remove("seleccionado");
      }
    });
  }

  // Agrega un evento de desplazamiento para actualizar el resaltado del menú
  window.addEventListener("scroll", highlightMenuItem);

  // Ejecuta la función una vez al cargar la página para resaltar el elemento de menú inicial
  highlightMenuItem();
});


// Función para cambiar el slider de productos y deshabilitar la opción del arrow button dependiendo la posición

const slider = document.querySelectorAll(".slider");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

function updateSlide() {
  slider.forEach((slide) => slide.classList.remove("active"));
  slider[activeSlide].classList.add("active");

  leftBtn.disabled = activeSlide === 0; //operación ternaria
  rightBtn.disabled = activeSlide === slider.length - 1;
}

rightBtn.addEventListener("click", () => {
  activeSlide = (activeSlide + 1) % slider.length; //índices cíclicos
  updateSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide = (activeSlide - 1 + slider.length) % slider.length;
  updateSlide();
});

updateSlide();
