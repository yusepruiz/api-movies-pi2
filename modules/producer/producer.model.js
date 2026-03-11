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
        console.error("Error ejecutando el query para crear la productora");
    }
}

/**
 * Comprueba si una productora existe y está activa
 * @param {number} id
 * @returns {boolean}
 */
export const existsActiveProducer = async (id) => {
    try {
        const [rows] = await pool.query(
            'SELECT id FROM Producer WHERE id = ? AND state = TRUE',
            [id]
        );
        return rows.length > 0;
    } catch (error) {
        console.error("Error ejecutando el query para comprobar productora activa");
        return false;
    }
};

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
        console.error("Error ejecutando el query para actualizar la productora");
    }
}


/**
 * Obtiene todos los productores de la base de datos
 * @returns {Array}
 */
export const getProducers = async (conditional = false) => {
    try {
        const whereClause = 'WHERE state = TRUE'; // Solo obtener directores activos
        const [rows] = await pool.query(
            `SELECT * FROM Producer ${conditional && whereClause}`
        );

        return rows;
    } catch (error) {
        console.error("Error ejecutando el query para obtener los productores");
        throw error;
    }
}

/**
 * Obtener el productor con el id especificado
 * @param {number} id
 * @return {Array}
 */
export const getProducerById = async (id) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM Producer WHERE id = ?',
            [id]
        );

        return rows;
    } catch (error) {

    }
}