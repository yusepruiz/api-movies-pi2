import { createProducer as createProducerModel, updateProducer as updateProducerModel } from "./producer.model.js";

/** Productora **/

/**
 * Crear una nueva productora
 * @param {Request} req 
 * @param {Response} res 
 */
export const createProducer = (req, res) => {
    try {
        const { name, state, slogan, description } = req.body;

        createProducerModel(name, state, slogan, description);

        console.log("Creando productora");
        res.status(201).json({
            message: "Productora creada exitosamente"
        });
    } catch (error) {
        console.error("Error al crear la productora");
        res.status(500).json({
            message: "Error al crear la productora",
            error: error.message
        });
    }
}

/**
 * Actualizar una productora existente
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateProducer = (req, res) => {
    try {
        const { name, state, slogan, description } = req.body;

        updateProducerModel(name, state, slogan, description);

        console.log("Actualizando productora");
        res.status(200).json({
            message: "Productora actualizada exitosamente"
        });
    } catch (error) {
        console.error("Error al actualizar la productora");
        res.status(500).json({
            message: "Error al actualizar la productora",
            error: error.message
        });
    }
}