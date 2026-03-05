import { Router } from "express";
import { getP, search, getById } from '../model/products.js';
export const p_router = Router();

function nombreCat(cat) {
    let c;
    switch (cat) {
            case "electricidad": 
                c="Electricidad";
                break;
            case "amoblamientos": 
                c="Amoblamientos";
                break;
            case "refrigeracion": 
                c="Refrigeracion";
                break;
            case "revestimientos": 
                c="Revestimientos";
                break;
            case "cyp": 
                c="Cortinas y portones";
                break;
            case "construccion": 
                c="Construccion";
                break;
    };
    return c;
};

p_router.get('/', async (req,res) => {
    try {
        const cat = req.query.cat;
        const p = await getP(cat);
        res.render('index',  {titulo: nombreCat(cat),
            categoria: cat,
            seccion: 'main-p',
            productos: p
        });
    } catch(error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

p_router.get('/detalle/:categoria/:id', async (req,res) => {
    try {
        const { categoria, id } = req.params;
        const p = await getById(categoria,id);
        res.render('index', {
            titulo: p.titulo,
            producto: p,
            categoria: categoria,
            seccion: 'product-detail', // Nueva sección que crearemos
            script: '/home.js'
        });
    } catch(error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

p_router.get('/buscar', async (req,res) => {
    try {
        const busqueda = req.query.q;
        const cat = req.query.cat;
        if (!cat || !busqueda) {
            return res.redirect('/'); 
        };
        const s = await search(cat,busqueda);
        res.render('index',  {titulo: `Resultados: ${busqueda}`,
            categoria: cat,
            busqueda: busqueda,
            seccion: 'main-p',
            productos: s
        });
    } catch(err) {
        res.status(500).send("Error en la busqueda");
    }
});