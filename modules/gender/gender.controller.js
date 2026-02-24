import { createGender as createGenderModel, updateGender as updateGenderModel } from "./gender.model.js";

/** Géneros **/

/**
 * Crear un nuevo género
 * @param {Request} req 
 * @param {Response} res 
 */
export const createGender = (req, res) => {
    const { name, state, description } = req.body;

    try {
        createGenderModel(name, state, description);

        console.log("Creando género");
        res.status(201).json({
            message: "Género creado exitosamente"
        });
    } catch (error) {
        console.error("Error al crear el género");
        res.status(500).json({
            message: "Error al crear el género",
            error: error.message
        });
    }
}

/**
 * Actualizar un género existente
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateGender = (req, res) => {
    const { name, state, description } = req.body;

    try {
        updateGenderModel(name, state, description);

        console.log("Actualizando género");
        res.status(200).json({
            message: "Género actualizado exitosamente"
        });
    } catch (error) {
        console.error("Error al actualizar el género");
        res.status(500).json({
            message: "Error al actualizar el género",
            error: error.message
        });
    }
}