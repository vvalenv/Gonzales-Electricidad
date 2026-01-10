import { initSwiper } from './carrousel.js';
import { UIController } from './UIController.js';
const ui = new UIController();

function loadComponents(id, path) {
    // Agregamos el "return" para poder encadenar el .then() fuera
    return fetch(path) 
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar " + path);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error:", error));
}

loadComponents("header","public/frontend/html/header.html");
loadComponents("main","public/frontend/html/main.html").then(() => {
    initSwiper();
    // Iniciamos lo que ya existe (como el navbar si está en el index fijo)
    ui.init();
    ui.applyCardEffects();
});
loadComponents("footer","public/frontend/html/footer.html");