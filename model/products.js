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
export const search = async (cat,busqueda) => {
    const tablasPermitidas = ['electricidad', 'refrigeracion', 'revestimientos', 'construccion', 'cyp', 'aberturas', 'amoblamientos'];
    if (!tablasPermitidas.includes(cat)) {
        throw new Error("Categoría no válida");
    };
    try {
        const query = `SELECT * FROM ${cat} WHERE titulo LIKE ? OR descripcion LIKE ?`;
        const [result] = await pool.query(query, [`%${busqueda}%`, `%${busqueda}%`]);
        return result;
    } catch(error) {
        console.error(error);
        return [];
    }
};

export const getById = async (cat,id) => {
    const tablasPermitidas = ['electricidad', 'refrigeracion', 'revestimientos', 'construccion', 'cyp', 'aberturas', 'amoblamientos'];
    if (!tablasPermitidas.includes(cat)) {
        throw new Error("Categoría no válida");
    };
    try {
        const [result] = await pool.query(`SELECT * FROM ${cat} WHERE id= ?;`,[id]);
        return result[0];
    } catch(error) {
        console.error(error);
        return null;
    }
};