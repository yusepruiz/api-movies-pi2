import pool from '../../database/config.js';
/** Productora **/

/**
 * Crea una nueva productora en la base de datos
 * @param {string} name 
 * @param {string} state 
 * @param {string} slogan 
 * @param {string} description 
 */
export const createProducer = async (name, state, slogan, description) => {
    try {
        const [result] = await pool.query(
            'INSERT INTO Producer (name, state, slogan, description, creation_date, update_date) VALUES (?, ?, ?, ?, NOW(), NOW())',
            [name, state, slogan, description]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al crear la productora");
    }
}

/**
 * Actualiza una productora existente en la base de datos
 * @param {number} id
 * @param {string} setClause
 * @param {Array} values
 */
export const updateProducer = async (id, setClause, values) => {
    try {
        const [result] = await pool.query(
            `UPDATE Producer SET ${setClause}, update_date = NOW() WHERE id = ?`,
            [...values, id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al actualizar la productora");
    }
}
