/*** Tipos de películas ***/

/**
 * Crea un nuevo tipo de película en la base de datos
 * @param {string} name 
 * @param {string} description 
 */
export const createType = async (name, description) => {
    try {
        const [result] = await pool.getPool().query(
            'INSERT INTO Type (name, description, creation_date, update_date) VALUES (?, ?, NOW(), NOW())',
            [name, description]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al crear el tipo de película");
    }
}

/**
 * Actualiza un tipo existente en la base de datos
 * @param {string} name 
 * @param {string} state 
 * @param {string} description 
 */
export const patchType = async (id, setClause, values) => {
    try {
        const [result] = await pool.getPool().query(
            `UPDATE Type SET ${setClause}, update_date = NOW() WHERE id = ?`,
            [...values, id]
        );

        return result.affectedRows;
    } catch (error) {
        console.error("Error al actualizar el tipo de película", error);
    }
}
