import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

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

app.use(express.static(path.join(__dirname, 'public/view')));

app.get('/', (req,res) => {
    res.render('index',  {titulo: 'Inicio',seccion: 'main',script: 'home.js' });
});

app.get('/QuienesSomos', (req,res) => {
    res.render('index',  {titulo: '¿Quienes Somos?',seccion: 'mainQ',script: 'default.js'});
});
app.get('/Contacto', (req,res) => {
    res.render('index',  {titulo: 'Contacto',seccion: 'mainC',script: 'default.js'});
});
app.get('/Login', (req,res) => {
    res.render('index',  {titulo: 'Login',seccion: 'mainL',script: 'default.js'});
});

app.get('/Registrarse', (req,res) => {
    res.render('index',  {titulo: 'Registro',seccion: 'mainR',script: 'default.js'});
});


app.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});