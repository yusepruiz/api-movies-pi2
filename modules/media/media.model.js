/** Media */

/**
 * Crear media
 * @param {object} body 
 */
export const createMedia = (body) => {
    const { serial, title, synopsis, urlMovie, image, yearRelease, gender, genders, director, type } = body;

    try {
        const query = "";

    } catch (error) {
        console.error("Error al crear el género");
    }
};

/**
 * Actualizar media
 * @param {object} body 
 */
export const updateMedia = (body) => {
    const { serial, title, synopsis, urlMovie, image, yearRelease, gender, genders, director, type } = body;

    try {
        const query = "";
    } catch (error) {
        console.error("Error al actualizar el género");
    }
};

/**
 * Eliminar media
 * @param {number} id 
 */
export const deleteMedia = (id) => {
    try {
        const query = "";
    } catch (error) {
        console.error("Error al eliminar el género");
    }
};

/**
 * Listar media
 */
export const listMedia = () => {
    try {
        const query = "";
    } catch (error) {
        console.error("Error al listar el género");
    }
};
