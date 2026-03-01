import { pool } from '../config/db_config.js';
export const getP = async (cat) => {
    const tablasPermitidas = ['electricidad', 'refrigeracion', 'revestimientos', 'construccion', 'cyp', 'aberturas', 'amoblamientos'];
    if (!tablasPermitidas.includes(cat)) {
        throw new Error("Categoría no válida");
    };
    try {
        const [result] = await pool.query(`SELECT * FROM ${cat};`);
        return result;
    } catch(error) {
        console.error(error);
    }
};