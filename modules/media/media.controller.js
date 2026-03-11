import { createMedia as createMediaModel, updateMedia as updateMediaModel, deleteMedia as deleteMediaModel, getMedia as getMediaModel, getMediaById as getMediaByIdModel } from "./media.model.js";
import { existsActiveDirector } from "../director/director.model.js";
import { existsActiveProducer } from "../producer/producer.model.js";
import { existsType } from "../type/type.model.js";
import { existsActiveGenre } from "../genre/genre.model.js";

/** Media */

/**
 * Crear media
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
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
        if (!await existsActiveGenre(genre_id)) {
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
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
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
        if (body.genre_id !== undefined && !(await existsActiveGenre(body.genre_id))) {
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
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
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
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getMedia = async (req, res) => {
    try {
        const media = await getMediaModel();

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


/**
 * Obtener una película por su ID
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getMediaById = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const affectedRows = await getMediaByIdModel(id);

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontró la película",
                submit: false
            });
        }

        res.status(200).json({
            message: "Película encontrada exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener la película");
        res.status(500).json({
            message: "Error al obtener la película",
            submit: false
        });
    }
}