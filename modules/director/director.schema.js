import { z } from 'zod';

export const directorSchema = z.object({
    state: z.boolean({
        message: "El estado debe ser un valor booleano (true o false)",
    })
});