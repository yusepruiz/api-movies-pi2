import { Router } from "express";
import { createGenre, getGenreById, getGenres, updateGenre } from "./genre.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { genreSchema } from "./genre.schema.js";


const router = Router();

/** Géneros **/
router.post("/", validateSchema(genreSchema), createGenre);
router.patch("/:id", validateSchema(genreSchema.partial()), updateGenre);
router.get("/", getGenres);
router.get("/:id", getGenreById);

export default router;