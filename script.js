// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    // Alternar la visibilidad del menú
    menuIcon.addEventListener("click", () => {
        if (menu.style.display === "block" || menu.style.display === "") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });

    // Agregar animación de entrada a las secciones cuando se desplace la página
    const sections = document.querySelectorAll('main > .section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "slide-in 1s ease-out";
                entry.target.style.opacity = "1";
            }
        });
    }, {
        threshold: 0.1 // Ajusta el umbral de visibilidad para la animación
    });

    sections.forEach(section => {
        section.style.opacity = "0";
        observer.observe(section);
    });
});