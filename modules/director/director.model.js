import pool from '../../database/config.js';
/** Director **/

/**
 * Crea un nuevo director en la base de datos
 * @param {boolean} state 
 * @param {string} description 
 */
export const createDirector = async (name, state) => {
    try {
        const [result] = await pool.getPool().query(
            'INSERT INTO Director (name, state, creation_date, update_date) VALUES (?, ?, NOW(), NOW())',
            [name, state]
        );

        return result.affectedRows;

    } catch (error) {
        console.error("Error al crear el director");
    }
}

/**
 * Actualiza un director existente en la base de datos
 * @param {string} description 
 * @param {boolean} state 
 */
export const patchDirector = async (id, setClause, values) => {
    try {

        const [result] = await pool.getPool().query(
            `UPDATE Director SET ${setClause}, update_date = NOW() WHERE id = ?`,
            [...values, id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al actualizar el director - model", error);
    }
}

