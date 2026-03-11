import { Router } from "express";

import { createMedia, deleteMedia, getMedia, updateMedia, getMediaById } from "./media.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { mediaSchema } from "./media.schema.js";

const router = Router();

/** Películas **/
router.get("/", getMedia);
router.get("/:id", getMediaById);
router.post("/", validateSchema(mediaSchema), createMedia);
router.patch("/:id", validateSchema(mediaSchema.partial()), updateMedia);
router.delete("/:id", deleteMedia);

export default router;