import { createGender as createGenderModel, patchGender as updateGenderModel } from "./gender.model.js";

/** Géneros **/

/**
 * Crear un nuevo género
 * @param {Request} req 
 * @param {Response} res 
 */
export const createGender = async (req, res) => {
    const { name, state, description } = req.body;

    try {
        const affectedRows = await createGenderModel(name, state, description);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "Género no encontrado",
                submit: false
            });
        }

        res.status(201).json({
            message: "Género creado exitosamente",
            affectedRows: affectedRows,
            submit: true
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
export const updateGender = async (req, res) => {
    const fields = req.body;
    const id = req.params.id;

    try {
        const keys = Object.keys(fields).filter(key => fields[key] !== undefined);
        if (keys.length === 0) return res.status(400).json({ msg: "No se enviaron datos para actualizar" });

        const setClause = keys.map(key => `${key} = ?`).join(', ');
        const values = keys.map(key => fields[key]);

        const affectedRows = await updateGenderModel(id, setClause, values);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "Género no encontrado",
                submit: false
            });
        }

        res.status(200).json({
            message: "Género actualizado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al actualizar el género");
        res.status(500).json({
            message: "Error al actualizar el género",
            error: error.message
        });
    }
}