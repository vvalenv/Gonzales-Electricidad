import { loadPage } from '../../routes/web.js';

async function initApp() {
    // 1. Cargar lo que siempre está (Header/Footer)
    await Promise.all([
        fetch('/view/html/header.html').then(r => r.text()).then(h => {
            const el = document.getElementById('header');
            if (el) el.innerHTML = h;
            else console.error("No se encontró el ID 'header'");
        }),

        fetch('/view/html/footer.html').then(r => r.text()).then(h => {
            const el = document.getElementById('footer');
            if (el) el.innerHTML = h;
        })
    ]);

    // 2. Cargar la página inicial según la URL actual
    loadPage(window.location.pathname);
}

initApp();