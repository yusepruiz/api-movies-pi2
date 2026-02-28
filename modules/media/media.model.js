import pool from '../../database/config.js';

/** Media */

/**
 * Crear media
 * @param {object} body 
 */
export const createMedia = async (body) => {
    const { title, synopsis, url, image, release_year, genre_id, director_id, producer_id, type_id } = body;

    const values = [title, synopsis, url, image, release_year, genre_id, director_id, producer_id, type_id];

    try {
        const [result] = await pool.query(
            'INSERT INTO Media (title, synopsis, urlMovie, image, yearRelease, gender, director, producer, type, creation_date, update_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
            values
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error ejecutando el query para crear la película");
    }
};

/**
 * Actualizar media
 * @param {number} id
 * @param {string} setClause
 * @param {Array} values
 */
export const updateMedia = async (id, setClause, values) => {
    try {
        const [result] = await pool.query(
            `UPDATE Media SET ${setClause}, update_date = NOW() WHERE id = ?`,
            [...values, id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error ejecutando el query para actualizar la película");
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
        console.error("Error ejecutando el query para eliminar la película");
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
        console.error("Error ejecutando el query para listar las películas");
    }
};
