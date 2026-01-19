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
        const logo = document.getElementById('logo');
        const linksUl = document.querySelector('.links-ul');
        
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                menuBtn.classList.toggle('rotacion');
                linksUl.classList.toggle('mostrar');
            });
        }

        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/';
        });
    }

    setupFooterEvents() {
        const ig = document.getElementById('ig');
        const fc = document.getElementById('fc');
        
        ig.addEventListener("click", () => {
            window.location.href = 'https://www.instagram.com/gonzalez_materialeselectricos';
        });
        fc.addEventListener("click", () => {
            window.location.href = 'https://www.facebook.com/GonzalezTemElectricidadNecochea/';
        });
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

    setupBody() {
        const body = document.getElementById('body');
        if (body.scrollHeight < window.innerHeight) {
            body.style.minHeight = '100vh';
        }
    }
}