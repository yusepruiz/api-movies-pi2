import { createMedia as createMediaModel, updateMedia as updateMediaModel, deleteMedia as deleteMediaModel, listMedia as listMediaModel } from "./media.model.js";

/** Media */

/**
 * Crear media
 * @param {Request} req 
 * @param {Response} res 
 */
export const createMedia = (req, res) => {
    try {
        createMediaModel(req.body);
        console.log("Creando media");
        res.status(201).json({
            message: "Media creado exitosamente"
        });
    } catch (error) {
        console.error("Error al crear el media");
        res.status(500).json({
            message: "Error al crear el media",
            error: error.message
        });
    }
};

/**
 * Actualizar media
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateMedia = (req, res) => {
    try {
        updateMediaModel(req.body);
        console.log("Actualizando media");
        res.status(200).json({
            message: "Media actualizado exitosamente"
        });
    } catch (error) {
        console.error("Error al actualizar el media");
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
export const deleteMedia = (req, res) => {
    try {
        const { id } = req.params;

        deleteMediaModel(id);

        console.log("Eliminando media");
        res.status(200).json({
            message: "Media eliminado exitosamente"
        });
    } catch (error) {
        console.error("Error al eliminar el media");
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
export const listMedia = (req, res) => {
    try {
        listMediaModel();

        console.log("Listando media");
        res.status(200).json({
            message: "Media listado exitosamente"
        });
    } catch (error) {
        console.error("Error al listar el media");
        res.status(500).json({
            message: "Error al listar el media",
            error: error.message
        });
    }
};
