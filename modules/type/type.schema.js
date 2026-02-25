import { z } from 'zod';

export const typeSchema = z.object({
    name: z.string({
        message: "El nombre debe ser un texto",
    }).min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre debe tener menos de 50 caracteres"),
    description: z.string({
        message: "La descripción debe ser un texto",
    }).min(1, "La descripción no puede estar vacía")
});
