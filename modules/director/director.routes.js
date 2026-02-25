import { Router } from "express";

import { createDirector, patchDirector as patchDirector } from "./director.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { directorSchema } from "./director.schema.js";

const router = Router();

/** Director **/
router.post("/", validateSchema(directorSchema), createDirector);
router.patch("/:id", validateSchema(directorSchema.partial()), patchDirector);

export default router;
