import { createMedia as createMediaModel, patchMedia as patchMediaModel, deleteMedia as deleteMediaModel, listMedia as listMediaModel } from "./media.model.js";

/** Media */

/**
 * Crear media
 * @param {Request} req 
 * @param {Response} res 
 */
export const createMedia = async (req, res) => {
    try {
        const affectedRows = await createMediaModel(req.body);

        if (affectedRows === 0) {
            return res.status(400).json({ message: "No se pudo crear el media" });
        }
        
        res.status(201).json({
            message: "Media creado exitosamente"
        });
    } catch (error) {
        console.error("Error al crear el media", error);
        res.status(500).json({
            message: "Error al crear el media",
            error: error.message
        });
    }
};

/**
 * Actualizar media (PATCH)
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateMedia = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        if (Object.keys(body).length === 0) {
            return res.status(400).json({ message: "No hay campos para actualizar" });
        }

        const setClause = Object.keys(body).map(key => `${key} = ?`).join(', ');
        const values = Object.values(body);

        const affectedRows = await patchMediaModel(id, setClause, values);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({ message: "Media no encontrado" });
        }

        res.status(200).json({
            message: "Media actualizado exitosamente"
        });
    } catch (error) {
        console.error("Error al actualizar el media", error);
        res.status(500).json({
            message: "Error al actualizar el media",
            error: error.message
        });
    }
};

/**
 * Eliminar media
 * @param {Request} req 
 * @param {Response} res 
 */
export const deleteMedia = async (req, res) => {
    try {
        const { id } = req.params;

        const affectedRows = await deleteMediaModel(id);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({ message: "Media no encontrado o ya eliminado" });
        }

        res.status(200).json({
            message: "Media eliminado exitosamente"
        });
    } catch (error) {
        console.error("Error al eliminar el media", error);
        res.status(500).json({
            message: "Error al eliminar el media",
            error: error.message
        });
    }
};

/**
 * Listar media
 * @param {Request} req 
 * @param {Response} res 
 */
export const listMedia = async (req, res) => {
    try {
        const media = await listMediaModel();

        if (media.length === 0 || media === undefined) {
            return res.status(404).json({ message: "Media no encontrado" });
        }

        res.status(200).json(media);
    } catch (error) {
        console.error("Error al listar el media", error);
        res.status(500).json({
            message: "Error al listar el media",
            error: error.message
        });
    }
};
