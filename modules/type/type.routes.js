import { Router } from "express";
import { createType } from "./type.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { typeSchema } from "./type.schema.js";

const router = Router();

/** Tipos de películas **/
router.post("/", validateSchema(typeSchema), createType);

export default router;