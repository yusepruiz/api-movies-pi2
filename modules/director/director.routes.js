import { Router } from "express";

import { createDirector, updateDirector } from "./director.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { directorSchema } from "./director.schema.js";

const router = Router();

/** Director **/
router.post("/", validateSchema(directorSchema), createDirector);
router.put("/", validateSchema(directorSchema), updateDirector);

export default router;
