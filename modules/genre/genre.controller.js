import { createGenre as createGenreModel, updateGenre as updateGenreModel, getGenres as getGenresModel, getGenreById as getGenreByIdModel } from "./genre.model.js";

/** Géneros **/

/**
 * Crear un nuevo género
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const createGenre = async (req, res) => {
    const { name, state, description } = req.body;

    try {
        const affectedRows = await createGenreModel(name, state, description);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se pudo crear el género",
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
            submit: false
        });
    }
}

/**
 * Actualizar un género existente
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const updateGenre = async (req, res) => {
    const fields = req.body;
    const id = req.params.id;

    try {
        const keys = Object.keys(fields).filter(key => fields[key] !== undefined);
        if (keys.length === 0) return res.status(400).json({ msg: "No se enviaron datos para actualizar" });

        const setClause = keys.map(key => `${key} = ?`).join(', ');
        const values = keys.map(key => fields[key]);

        const affectedRows = await updateGenreModel(id, setClause, values);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se pudo actualizar el género",
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
            submit: false
        });
    }
}


/**
 * Obtener todos los géneros
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getGenres = async (req, res) => {

    try {
        const affectedRows = await getGenresModel();

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(200).json({
                message: "No se encontraron géneros",
                submit: false
            });
        }

        res.status(200).json({
            message: "Géneros encontrados exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener los géneros");
        res.status(500).json({
            message: "Error al obtener los géneros",
            submit: false
        });
    }
}

/**
 * Obtener un género por su ID
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getGenreById = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const affectedRows = await getGenreByIdModel(id);

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontró el género",
                submit: false
            });
        }

        res.status(200).json({
            message: "Género encontrado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener el género");
        res.status(500).json({
            message: "Error al obtener el género",
            submit: false
        });
    }
}