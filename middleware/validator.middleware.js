import { ZodError } from 'zod';

export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        // 1. Verificamos si es un error de validación de Zod
        if (error instanceof ZodError) {

            return res.status(400).json({
                status: 'fail',
                message: "Error de validación",
                // Usamos error.issues que es más seguro en versiones recientes de Zod
                errors: error.issues.map(issue => (
                    console.log("->", issue),
                    {
                        path: issue.path.join('.'),
                        message: issue.message
                    }))
            });
        }

        // 2. Si es otro tipo de error (ej. error de sintaxis JSON), pasamos al siguiente middleware
        next(error);
    }
};