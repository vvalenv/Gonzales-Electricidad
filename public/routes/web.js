import { initDef, initIndex } from '../view/functions/indexFunctions.js';

const routes = {
    '/': { 
        template: '/main.html', 
        init: initIndex
    },
    '/QuienesSomos': { 
        template: '/mainQ.html',
        init: initDef
    },
    '/Contacto': { 
        template: '/mainC.html',
        init: initDef
    },
    '/Login': { 
        template: '/mainL.html',
        init: initDef
    }
};
export async function loadPage(path) {
    const route = routes[path] || routes['/'];
    
    // 1. Fetch del HTML
    const response = await fetch(route.template);
    const html = await response.text();
    const container = document.getElementById('main');
        
    if (container) {
        container.innerHTML = html;
    } else {
        console.error("No se encontró el contenedor #main para cargar la página");
    }

    // 2. Ejecutar el init que importamos arriba
    if (route.init) {
        route.init();
    }
}

window.addEventListener('popstate', () => {
    loadPage(window.location.pathname);
});