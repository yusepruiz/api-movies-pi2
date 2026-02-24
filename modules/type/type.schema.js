import { z } from 'zod';

export const typeSchema = z.object({
    state: z.boolean({
        message: "El estado debe ser un valor booleano (true o false)",
    }),
    description: z.string({
        message: "La descripción debe ser un texto",
    }).min(1, "La descripción no puede estar vacía")
});
