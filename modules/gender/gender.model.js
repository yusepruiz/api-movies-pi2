import pool from '../../database/config.js';
/*** Géneros ***/

/**
 * Crea un nuevo género en la base de datos
 * @param {string} name 
 * @param {string} state 
 * @param {string} description 
 */
export const createGender = async (name, state, description) => {
    try {
        const [result] = await pool.query(
            'INSERT INTO Gender (name, state, description, creation_date, update_date) VALUES (?, ?, ?, NOW(), NOW())',
            [name, state, description]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al crear el género");
    }
}

/**
 * Actualiza un género existente en la base de datos
 * @param {number} id
 * @param {string} setClause
 * @param {Array} values
 */
export const patchGender = async (id, setClause, values) => {
    try {
        const [result] = await pool.query(
            `UPDATE Gender SET ${setClause}, update_date = NOW() WHERE id = ?`,
            [...values, id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al actualizar el género", error);
    }
}
