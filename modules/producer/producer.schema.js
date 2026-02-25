import { z } from 'zod';

export const producerSchema = z.object({
    name: z.string({
        message: "El nombre debe ser un texto",
    }).min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre debe tener menos de 50 caracteres"),
    state: z.boolean({
        message: "El estado debe ser un valor booleano (true o false)",
    }),
    slogan: z.string({
        message: "El slogan debe ser un texto",
    }).min(3, "El slogan debe tener al menos 3 caracteres")
        .max(100, "El slogan debe tener menos de 100 caracteres"),
    description: z.string({
        message: "La descripción debe ser un texto",
    }).min(1, "La descripción no puede estar vacía")
});
