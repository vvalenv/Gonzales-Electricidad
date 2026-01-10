export class UIController {
    constructor() {
        // Guardamos referencias a elementos que se repiten mucho
        this.mainContainer = document.getElementById('main');
    }

    // Método para inicializar todos los oyentes de eventos
    init() {
        this.setupNavbarEvents();
    }

    setupNavbarEvents() {
        const menuBtn = document.querySelector('.menu');
        const linksUl = document.querySelector('.links-ul');

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                menuBtn.classList.toggle('rotacion');
                linksUl.classList.toggle('mostrar');
            });
        }
    }

    // Método que podrías llamar después de un fetch exitoso
    applyCardEffects() {
        const cards = document.querySelectorAll('.carrousel_content');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                setTimeout(() => {
                    card.style.backgroundColor = '#012a50';
                    card.style.borderColor = '#1d1d1d'
                }, 50);
            });
            card.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    card.style.backgroundColor = '#6289ae8b';
                    card.style.borderColor = 'transparent'
                }, 50);
            });
        });
    }
}