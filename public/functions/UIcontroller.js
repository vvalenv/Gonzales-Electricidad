export class UIController {
    constructor() {
        // Guardamos referencias a elementos que se repiten mucho
        this.mainContainer = document.getElementById('main');
    }


    setupNavbarEvents() {
        const menuBtn = document.getElementById('menu');
        const logo = document.getElementById('logo');
        const linksUl = document.getElementById('links');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                menuBtn.classList.toggle('rotacion');
                linksUl.classList.toggle('mostrar');
                console.log(menuBtn);
            });
        };

        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/';
        });

        const submenubtn = document.querySelectorAll(".submenu-btn");
        for(let i=0; i<submenubtn.length; i++) {
            submenubtn[i].addEventListener("click", function() {
                if (window.innerWidth < 800) {
                    const submenu = this.nextElementSibling;
                    const height_submenu = submenu.scrollHeight;
                    if (submenu.classList.contains("desplegar")){
                        submenu.classList.remove("desplegar");
                        submenu.removeAttribute("style");
                    } else {
                    submenu.classList.add("desplegar");
                    submenu.style.height = height_submenu + "px";
                }
            }
            });
        };
    };

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
            card.addEventListener('click', (e) => {
                const cat = e.currentTarget.getAttribute("data-cat");
                window.location.href=`/productos?cat=${cat}`;
            });
        });
    }

    setupBody() {
        const body = document.getElementById('body');
        const back = document.getElementById('btn-back');
        if (body.scrollHeight < window.innerHeight) {
            body.style.minHeight = '100vh';
        };
        back.addEventListener('click', () => {
            window.history.back();
        });
    }
}