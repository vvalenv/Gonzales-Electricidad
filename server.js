import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { p_router } from './routes/product-router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs'); // Configuramos el motor de plantillas

// 1. CORS: Permite la conexión desde el frontend (http://localhost:80/...)
// Si el frontend y backend están en diferentes puertos.
app.use(cors()); 

// 2. Body Parser: Express usa JSON en el body de las peticiones (POST/PUT/DELETE)
app.use(express.json());
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('index',  {titulo: 'Inicio',seccion: 'main',script: 'home.js' });
});

app.get('/quienes_somos', (req,res) => {
    res.render('index',  {titulo: '¿Quienes Somos?',seccion: 'main-q',script: 'default.js'});
});
app.get('/contacto', (req,res) => {
    res.render('index',  {titulo: 'Contacto',seccion: 'main-c',script: 'default.js'});
});

app.use('/productos', p_router);

app.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});