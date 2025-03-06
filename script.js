// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('expanded');
        });
    });
});

// Agregamos CSS para el efecto de ampliación
/* styles.css */
.gallery img.expanded {
    width: 80%;
    height: auto;
    position: fixed;
    top: 10%;
    left: 10%;
    z-index: 1000;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
