import { createDirector as createDirectorModel, updateDirector as updateDirectorModel, getDirectors as getDirectorsModel, getDirectorById as getDirectorByIdModel } from "./director.model.js";

/** Director **/

/**
 * Crea un nuevo registro de director en el sistema.
 * @async
 * @function createDirector
 * @param {import('express').Request} req - Objeto de petición. Se espera `name` y `state` en req.body.
 * @param {import('express').Response} res - Objeto de respuesta.
 * @returns {Promise<void>}
 * @description
 * - **201 (Created):** Si el director se inserta correctamente.
 * - **404 (Not Found):** Si la base de datos no confirma filas afectadas tras la inserción.
 * - **500 (Internal Server Error):** Si ocurre una excepción durante el proceso.
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
 * Actualiza parcialmente un director existente mediante su ID.
 * @async
 * @function updateDirector
 * @param {import('express').Request} req - Objeto de petición. Contiene `id` en params y los campos a actualizar en body.
 * @param {import('express').Response} res - Objeto de respuesta.
 * @returns {Promise<void>}
 * @description
 * La función construye dinámicamente la cláusula SET basada en las llaves presentes en `req.body`.
 * - **200 (OK):** Actualización exitosa.
 * - **400 (Bad Request):** Si el cuerpo de la petición está vacío.
 * - **404 (Not Found):** Si el ID no corresponde a ningún registro o no hubo cambios.
 * - **500 (Internal Server Error):** Error en la base de datos o lógica del servidor.
 */
export const updateDirector = async (req, res) => {
    const fields = req.body;
    const id = Number(req.params.id);

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

/**
 * Obtiene la lista completa de directores desde la base de datos.
 * @async
 * @function getDirectors
 * @param {import('express').Request} req - Objeto de petición de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 * 
 * @returns {Promise<void>} No retorna un valor directamente, envía una respuesta JSON al cliente.
 * @description
 * Esta función invoca al modelo `getDirectorsModel` para recuperar los registros.
 * - Si tiene éxito y hay datos, devuelve un status **201** con los registros.
 * - Si no hay registros, devuelve un status **404**.
 * - Si ocurre un error en el servidor, devuelve un status **500**.
 */
export const getDirectors = async (req, res) => {
    try {
        const affectedRows = await getDirectorsModel();

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontraron directores",
                submit: false
            });
        }

        res.status(200).json({
            message: "Directores encontrados exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener los directores");
        res.status(500).json({
            message: "Error al obtener los directores",
            submit: false
        });
    }
}

/**
 * Obtiene un director específico por su ID.
 * @async
 * @function getDirectorById
 * @param {import('express').Request} req - Objeto de petición de Express. Se espera que contenga el ID en los parámetros (ej. req.params.id).
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} No retorna un valor directamente, sino que envía una respuesta JSON al cliente.
 * @throws {Error} Si ocurre un error inesperado durante la consulta a la base de datos.
 */
export const getDirectorById = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const affectedRows = await getDirectorByIdModel(id);

        if (affectedRows.length === 0 || affectedRows === undefined) {
            return res.status(404).json({
                message: "No se encontró el director",
                submit: false
            });
        }

        res.status(200).json({
            message: "Director encontrado exitosamente",
            affectedRows: affectedRows,
            submit: true
        });
    } catch (error) {
        console.error("Error al obtener el director");
        res.status(500).json({
            message: "Error al obtener el director",
            submit: false
        });
    }
}