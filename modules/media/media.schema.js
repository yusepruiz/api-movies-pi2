import { z } from 'zod';

export const mediaSchema = z.object({
    title: z.string({
        message: "El título debe ser un texto"
    }).min(1, "El título no puede estar vacío"),
    synopsis: z.string({
        message: "La sinopsis debe ser un texto"
    }).min(1, "La sinopsis no puede estar vacía"),
    urlMovie: z.string({
        message: "La URL de la película debe ser un texto"
    }).url("Debe ser una URL válida"),
    image: z.string({
        message: "La imagen debe ser un texto"
    }).url("La imagen debe ser una URL válida"),
    yearRelease: z.number({
        message: "El año de estreno debe ser un número"
    }).int().min(1800, "Año no válido").max(new Date().getFullYear() + 10, "Año no válido"),
    gender: z.number({
        message: "El género debe ser numérico"
    }).int(),
    director: z.number({
        message: "El director debe ser numérico"
    }).int(),
    producer: z.number({
        message: "La productora debe ser numérico"
    }).int(),
    type: z.number({
        message: "El tipo debe ser numérico"
    }).int(),
    creationDate: z.date().optional(),
    updateDate: z.date().optional()
});
