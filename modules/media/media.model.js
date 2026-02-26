import pool from '../../database/config.js';

/** Media */

/**
 * Crear media
 * @param {object} body 
 */
export const createMedia = async (body) => {
<<<<<<< HEAD
    const { title, synopsis, urlMovie, image, yearRelease, gender, director, producer, type } = body;
=======
    const { itle, synopsis, urlMovie, image, yearRelease, gender, director, producer, type } = body;
>>>>>>> 7148ba2401bcd6502aec2db5d8fe9b01023cb9de

    const values = [title, synopsis, urlMovie, image, yearRelease, gender, director, producer, type];

    try {
        const [result] = await pool.query(
<<<<<<< HEAD
            'INSERT INTO Media (title, synopsis, urlMovie, image, yearRelease, gender, director, producer, type, creation_date, update_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
=======
            'INSERT INTO Media (title, synopsis, urlMovie, image, yearRelease, gender, director, producer, type, creation_date, update_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
>>>>>>> 7148ba2401bcd6502aec2db5d8fe9b01023cb9de
            values
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al crear el media");
    }
};

/**
 * Actualizar media
 * @param {number} id
 * @param {string} setClause
 * @param {Array} values
 */
export const patchMedia = async (id, setClause, values) => {
    try {
        const [result] = await pool.query(
            `UPDATE Media SET ${setClause}, update_date = NOW() WHERE id = ?`,
            [...values, id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al actualizar el media", error);
    }
};

/**
 * Eliminar media
 * @param {number} id 
 */
export const deleteMedia = async (id) => {
    try {
        const [result] = await pool.query(
            'DELETE FROM Media WHERE id = ?',
            [id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al eliminar el media", error);
    }
};

/**
 * Listar media
 */
export const listMedia = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM Media');

        return rows;
    } catch (error) {
        console.error("Error al listar el media", error);
    }
};
