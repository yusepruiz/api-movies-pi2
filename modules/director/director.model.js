import pool from '../../database/config.js';
/** Director **/

/**
 * Crea un nuevo director en la base de datos
 * @param {string} name 
 * @param {boolean} state 
 */
export const createDirector = async (name, state) => {
    try {
        const [result] = await pool.query(
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
 * @param {number} id
 * @param {string} setClause
 * @param {Array} values
 */
export const patchDirector = async (id, setClause, values) => {
    try {
        const [result] = await pool.query(
            `UPDATE Director SET ${setClause}, update_date = NOW() WHERE id = ?`,
            [...values, id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al actualizar el director - model", error);
    }
}

/**
 * Comprueba si un director existe y está activo
 * @param {number} id
 * @returns {boolean}
 */
export const existsActiveDirector = async (id) => {
    try {
        const [rows] = await pool.query(
            'SELECT id FROM Director WHERE id = ? AND state = TRUE',
            [id]
        );

        return rows.length > 0;
    } catch (error) {
        console.error("Error comprobando director activo", error);
        return false;
    }
};

