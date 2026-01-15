import { initDef, initIndex } from '../view/functions/indexFunctions.js';

const routes = {
    '/': { 
        template: '../view/html/main.html', 
        init: initIndex
    },
    '/QuienesSomos': { 
        template: '../view/html/mainQ.html',
        init: initDef
    }
};
export async function loadPage(path) {
    const route = routes[path] || routes['/'];
    
    // 1. Fetch del HTML
    const response = await fetch(route.template);
    const html = await response.text();
    document.getElementById('main').innerHTML = html;
    
    // 2. Ejecutar el init que importamos arriba
    if (route.init) {
        route.init();
    }
}