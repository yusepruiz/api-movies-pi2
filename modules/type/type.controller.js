import { createType as createTypeModel, updateType as updateTypeModel, getTypes as getTypesModel, getTypeById as getTypeByIdModel } from "./type.model.js";


/**
 * Crear tipo de película
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const createType = async (req, res) => {
    const { name, description } = req.body;

    try {
        const affectedRows = await createTypeModel(name, description);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se pudo crear el tipo de película",
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
            submit: false
        });
    }
}

/**
 * Actualizar un tipo de película existente
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const updateType = async (req, res) => {
    const fields = req.body;
    const id = req.params.id;

    try {

        const keys = Object.keys(fields).filter(key => fields[key] !== undefined);
        if (keys.length === 0) return res.status(400).json({ msg: "No se enviaron datos para actualizar" });

        const setClause = keys.map(key => `${key} = ?`).join(', ');
        const values = keys.map(key => fields[key]);

        const affectedRows = await updateTypeModel(id, setClause, values);

        if (affectedRows === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se pudo actualizar el tipo de película",
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
            message: "Error al actualizar el tipo de película",
            submit: false
        });
    }
}


/**
 * Obtener todos los tipos de películas
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getTypes = async (req, res) => {
    try {
        const affectedRows = await getTypesModel();

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontraron tipos de películas",
                submit: false
            });
        }

        res.status(200).json({
            message: "Tipos de películas encontrados exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener los tipos de películas");
        res.status(500).json({
            message: "Error al obtener los tipos de películas",
            submit: false
        });
    }
}


/**
 * Obtener un tipo de película por su ID
 * @async
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export const getTypeById = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const affectedRows = await getTypeByIdModel(id);

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontró el tipo de película",
                submit: false
            });
        }

        res.status(200).json({
            message: "Tipo de película encontrado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener el tipo de película");
        res.status(500).json({
            message: "Error al obtener el tipo de película",
            submit: false
        });
    }
}