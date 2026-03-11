import { createGender as createGenderModel, updateGender as updateGenderModel, getGenders as getGendersModel, getGenderById as getGenderByIdModel } from "./gender.model.js";

/** Géneros **/

/**
 * Crear un nuevo género
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const createGender = async (req, res) => {
    const { name, state, description } = req.body;

    try {
        const affectedRows = await createGenderModel(name, state, description);

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
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
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
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getGenders = async (req, res) => {
    try {
        const affectedRows = await getGendersModel();

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontraron géneros",
                submit: false
            });
        }

        res.status(201).json({
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
 * Obtener todos los géneros
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getActiveGenders = async (req, res) => {
    try {
        const affectedRows = await getGendersModel(true);

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontraron géneros",
                submit: false
            });
        }

        res.status(201).json({
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
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getGenderById = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const affectedRows = await getGenderByIdModel(id);

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontró el género",
                submit: false
            });
        }

        res.status(201).json({
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