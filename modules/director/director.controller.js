import { createDirector as createDirectorModel, updateDirector as updateDirectorModel } from "./director.model.js";

/** Director **/

/**
 * Crear un nuevo director
 * @param {Request} req 
 * @param {Response} res 
 */
export const createDirector = async (req, res) => {
    const { name, state } = req.body;

    try {
        const affectedRows = await createDirectorModel(name, state);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "Director no creado",
                submit: false
            });
        }

        res.status(201).json({
            message: "Director creado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al crear el director");
        res.status(500).json({
            message: "Error al crear el director",
            submit: false
        });
    }
}

/**
 * Actualizar un director existente
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateDirector = async (req, res) => {
    const fields = req.body;
    const id = req.params.id;

    try {
        const keys = Object.keys(fields).filter(key => fields[key] !== undefined);
        if (keys.length === 0) return res.status(400).json({ msg: "No se enviaron datos para actualizar" });

        const setClause = keys.map(key => `${key} = ?`).join(', ');
        const values = keys.map(key => fields[key]);

        const affectedRows = await updateDirectorModel(id, setClause, values);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "Director no encontrado",
                submit: false
            });
        }

        res.status(200).json({
            message: "Director actualizado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al actualizar el director");
        res.status(500).json({
            message: "Error al actualizar el director",
            submit: false
        });
    }
}