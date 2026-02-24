import { z } from 'zod';

export const mediaSchema = z.object({
    serial: z.string({
        message: "El serial debe ser un texto"
    }).min(1, "El serial no puede estar vacío"),
    title: z.string({
        message: "El título debe ser un texto"
    }).min(1, "El título no puede estar vacío"),
    synopsis: z.string({
        message: "La sinopsis debe ser un texto"
    }).min(1, "La sinopsis no puede estar vacía"),
    url: z.string({
        message: "La URL debe ser un texto"
    }).url("Debe ser una URL válida"),
    image: z.string({
        message: "La imagen debe ser un texto"
    }).url("La imagen debe ser una URL válida"),
    releaseYear: z.number({
        message: "El año de estreno debe ser un número"
    }).int().min(1800, "Año no válido").max(new Date().getFullYear() + 10, "Año no válido"),
    gender: z.string({
        message: "El género debe ser un texto"
    }).min(1, "El género no puede estar vacío"),
    director: z.string({
        message: "El director debe ser un texto"
    }).min(1, "El director no puede estar vacío"),
    producer: z.string({
        message: "La productora debe ser un texto"
    }).min(1, "La productora no puede estar vacía"),
    type: z.string({
        message: "El tipo debe ser un texto"
    }).min(1, "El tipo no puede estar vacío"),
    // Estos campos suelen ser automáticos, pero se incluyen por si se envían
    creationDate: z.date().optional(),
    updateDate: z.date().optional()
});
