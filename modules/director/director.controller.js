import { createDirector as createDirectorModel, updateDirector as updateDirectorModel } from "./director.model.js";

/** Director **/

/**
 * Crear un nuevo director
 * @param {Request} req 
 * @param {Response} res 
 */
export const createDirector = (req, res) => {
    const { state, description } = req.body;

    try {
        createDirectorModel(state, description);

        console.log("Creando director");
        res.status(201).json({
            message: "Director creado exitosamente"
        });
    } catch (error) {
        console.error("Error al crear el director");
        res.status(500).json({
            message: "Error al crear el director",
            error: error.message
        });
    }
}

/**
 * Actualizar un director existente
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateDirector = (req, res) => {
    const { state, description } = req.body;

    try {
        updateDirectorModel(state, description);

        console.log("Actualizando director");
        res.status(200).json({
            message: "Director actualizado exitosamente"
        });
    } catch (error) {
        console.error("Error al actualizar el director");
        res.status(500).json({
            message: "Error al actualizar el director",
            error: error.message
        });
    }
}