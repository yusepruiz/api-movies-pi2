import { createMedia as createMediaModel, updateMedia as updateMediaModel, deleteMedia as deleteMediaModel, listMedia as listMediaModel } from "./media.model.js";
import { existsActiveDirector } from "../director/director.model.js";
import { existsActiveProducer } from "../producer/producer.model.js";
import { existsType } from "../type/type.model.js";
import { existsActiveGender } from "../gender/gender.model.js";

/** Media */

/**
 * Crear media
 * @param {Request} req 
 * @param {Response} res 
 */
export const createMedia = async (req, res) => {
    try {
        const { director_id, producer_id, type_id, genre_id } = req.body;

        // validations
        if (!await existsActiveDirector(director_id)) {
            return res.status(400).json({ message: "Director inválido o inactivo" });
        }
        if (!await existsActiveProducer(producer_id)) {
            return res.status(400).json({ message: "Productora inválida o inactiva" });
        }
        if (!await existsType(type_id)) {
            return res.status(400).json({ message: "El tipo de película no existe" });
        }
        if (!await existsActiveGender(genre_id)) {
            return res.status(400).json({ message: "Género inválido o inactivo" });
        }

        const affectedRows = await createMediaModel(req.body);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(400).json({ message: "No se pudo crear la película", submit: false });
        }

        res.status(201).json({
            message: "Película creada exitosamente",
            submit: true
        });
    } catch (error) {
        console.error("Error al crear la película", error);
        res.status(500).json({
            message: "Error al crear la película",
            submit: false
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

        // validations only if corresponding fields are present
        if (body.director_id !== undefined && !(await existsActiveDirector(body.director_id))) {
            return res.status(400).json({ message: "Director inválido o inactivo" });
        }
        if (body.producer_id !== undefined && !(await existsActiveProducer(body.producer_id))) {
            return res.status(400).json({ message: "Productora inválida o inactiva" });
        }
        if (body.type_id !== undefined && !(await existsType(body.type_id))) {
            return res.status(400).json({ message: "El tipo de película no existe" });
        }
        if (body.genre_id !== undefined && !(await existsActiveGender(body.genre_id))) {
            return res.status(400).json({ message: "Género inválido o inactivo" });
        }

        const setClause = Object.keys(body).map(key => `${key} = ?`).join(', ');
        const values = Object.values(body);

        const affectedRows = await updateMediaModel(id, setClause, values);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({ message: "No se pudo actualizar la película", submit: false });
        }

        res.status(200).json({
            message: "Película actualizada exitosamente",
            submit: true
        });
    } catch (error) {
        console.error("Error al actualizar la película");
        res.status(500).json({
            message: "Error al actualizar la película",
            submit: false
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
            return res.status(404).json({
                message: "No se pudo eliminar la película",
                submit: false
            });
        }

        res.status(200).json({
            message: "Película eliminada exitosamente",
            submit: true
        });
    } catch (error) {
        console.error("Error al eliminar la película");
        res.status(500).json({
            message: "Error al eliminar la película",
            submit: false
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

       if (media === undefined || media.length === 0) {
            return res.status(404).json({
                message: "No se encontraron películas",
                submit: false
            });
        }

        res.status(200).json(media);
    } catch (error) {
        console.error("Error al listar las películas");
        res.status(500).json({
            message: "Error al listar las películas",
            submit: false
        });
    }
};
