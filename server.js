import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. CORS: Permite la conexión desde el frontend (http://localhost:80/...)
// Si el frontend y backend están en diferentes puertos.
app.use(cors()); 

// 2. Body Parser: Express usa JSON en el body de las peticiones (POST/PUT/DELETE)
app.use(express.json());

app.get('/:any(.*)', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});