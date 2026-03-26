import { createProducer as createProducerModel, updateProducer as updateProducerModel, getProducers as getProducersModel, getProducerById as getProducerByIdModel } from "./producer.model.js";

/** Productora **/

/**
 * Crear una nueva productora
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const createProducer = async (req, res) => {
    try {
        const { name, state, slogan, description } = req.body;

        const affectedRows = await createProducerModel(name, state, slogan, description);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(200).json({
                message: "No se pudo crear la productora",
                submit: false
            });
        }

        res.status(201).json({
            message: "Productora creada exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al crear la productora");
        res.status(500).json({
            message: "Error al crear la productora",
            submit: false
        });
    }
}

/**
 * Actualizar una productora existente
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const updateProducer = async (req, res) => {
    const fields = req.body;
    const id = req.params.id;

    try {

        const keys = Object.keys(fields).filter(key => fields[key] !== undefined);
        if (keys.length === 0) return res.status(400).json({ msg: "No se enviaron datos para actualizar" });

        const setClause = keys.map(key => `${key} = ?`).join(', ');
        const values = keys.map(key => fields[key]);

        const affectedRows = await updateProducerModel(id, setClause, values);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(200).json({
                message: "No se pudo actualizar la productora",
                submit: false
            });
        }

        res.status(200).json({
            message: "Productora actualizada exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al actualizar la productora");
        res.status(500).json({
            message: "Error al actualizar la productora",
            submit: false
        });
    }
}


/**
 * Obtener todos los productores
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getProducers = async (req, res) => {
    try {
        const affectedRows = await getProducersModel();

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(200).json({
                message: "No se encontraron productores",
                submit: false
            });
        }

        res.status(200).json({
            message: "Productores encontrados exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener los productores");
        res.status(500).json({
            message: "Error al obtener los productores",
            submit: false
        });
    }
}


/**
 * Obtener un productor por su ID
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getProducerById = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const affectedRows = await getProducerByIdModel(id);

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(200).json({
                message: "No se encontró el productor",
                submit: false
            });
        }

        res.status(200).json({
            message: "Productor encontrado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener el productor");
        res.status(500).json({
            message: "Error al obtener el productor",
            submit: false
        });
    }
}