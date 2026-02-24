/** Director **/

/**
 * Crea un nuevo director en la base de datos
 * @param {boolean} state 
 * @param {string} description 
 */
export const createDirector = (state, description) => {
    try {
        console.log({ state, description });
        const query = "";
    } catch (error) {
        console.error("Error al crear el director");
    }
}

/**
 * Actualiza un director existente en la base de datos
 * @param {string} description 
 * @param {boolean} state 
 */
export const updateDirector = (description, state) => {
    try {
        const query = "";
    } catch (error) {
        console.error("Error al actualizar el director");
    }
}
