import { Router } from "express";
import { getP } from '../model/products.js';
export const p_router = Router() 

p_router.get('/', async (req,res) => {
    try {
        const cat = req.query.cat;
        const p = await getP(cat);
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
        res.render('index',  {titulo: c,seccion: 'main-p',productos: p,script: 'default.js'});
    } catch(error) {
        console.error(error);
        res.status(500).send("Error");
    }
});