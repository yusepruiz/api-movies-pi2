import { createType as createTypeModel } from "./type.model.js";


/**
 * Crear tipo de película
 * @param {Request} req 
 * @param {Response} res 
 */
export const createType = (req, res) => {
    const { name, description } = req.body;

    try {
        createTypeModel(name, description);

        console.log("Creando tipo de película");
        res.status(201).json({
            message: "Tipo de película creado exitosamente"
        });
    } catch (error) {
        console.error("Error al crear el tipo de película");
        res.status(500).json({
            message: "Error al crear el tipo de película",
            error: error.message
        });
    }
}