import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();
export const pool = createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false // Necesario para muchos hostings como Render/Aiven
    },
    waitForConnections: true,
    connectionLimit: 10
});