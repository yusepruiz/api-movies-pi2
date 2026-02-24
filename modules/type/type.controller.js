import { createType as createTypeModel } from "./type.model.js";


/**
 * Crear tipo de película
 * @param {Request} req 
 * @param {Response} res 
 */
export const createType = async (req, res) => {
    const { name, description } = req.body;

    try {
        const affectedRows = await createTypeModel(name, description);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "Tipo de película no creado",
                submit: false
            });
        }

        res.status(201).json({
            message: "Tipo de película creado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al crear el tipo de película");
        res.status(500).json({
            message: "Error al crear el tipo de película",
            error: error.message
        });
    }
}

/**
 * Actualizar una productora existente
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateType = async (req, res) => {
    const fields = req.body;
    const id = req.params.id;

    try {

        const keys = Object.keys(fields).filter(key => fields[key] !== undefined);
        if (keys.length === 0) return res.status(400).json({ msg: "No se enviaron datos para actualizar" });

        const setClause = keys.map(key => `${key} = ?`).join(', ');
        const values = keys.map(key => fields[key]);

        const affectedRows = await patchType(id, setClause, values);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "Tipo de película no encontrado",
                submit: false
            });
        }

        res.status(200).json({
            message: "Tipo de película actualizado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al actualizar el tipo de película");
        res.status(500).json({
            message: "Error al actualizar la productora",
            error: error.message
        });
    }
}