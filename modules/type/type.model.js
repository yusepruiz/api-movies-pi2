import pool from '../../database/config.js';
/*** Tipos de películas ***/

/**
 * Crea un nuevo tipo de película en la base de datos
 * @param {string} name 
 * @param {string} description 
 */
export const createType = async (name, description) => {
    try {
        const [result] = await pool.query(
            'INSERT INTO Type (name, description, creation_date, update_date) VALUES (?, ?, NOW(), NOW())',
            [name, description]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error ejecutando el query para crear el tipo de película");
    }
}

/**
 * Comprueba si un tipo existe
 * @param {number} id
 * @returns {boolean}
 */
export const existsType = async (id) => {
    try {
        const [rows] = await pool.query(
            'SELECT id FROM Type WHERE id = ?',
            [id]
        );
        return rows.length > 0;
    } catch (error) {
        console.error("Error ejecutando el query para comprobar tipo");
        return false;
    }
};

/**
 * Actualiza un tipo existente en la base de datos
 * @param {number} id
 * @param {string} setClause
 * @param {Array} values
 */
export const patchType = async (id, setClause, values) => {
    try {
        const [result] = await pool.query(
            `UPDATE Type SET ${setClause}, update_date = NOW() WHERE id = ?`,
            [...values, id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error ejecutando el query para actualizar el tipo de película");
    }
}
