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
        message: "El género debe ser un número"
    }).min(1, "El género no puede estar vacío"),
    director: z.number({
        message: "El director debe ser un número"
    }).min(1, "El director no puede estar vacío"),
    producer: z.number({
        message: "La productora debe ser un número"
    }).min(1, "La productora no puede estar vacía"),
    type: z.number({
        message: "El tipo debe ser un número"
    }).min(1, "El tipo no puede estar vacío"),
    creationDate: z.date().optional(),
    updateDate: z.date().optional()
});
