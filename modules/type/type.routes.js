import { Router } from "express";
import { createType, updateType, getTypes, getTypeById } from "./type.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { typeSchema } from "./type.schema.js";

const router = Router();

/** Tipos de películas **/
router.post("/", validateSchema(typeSchema), createType);
router.patch("/:id", validateSchema(typeSchema.partial()), updateType);
router.get("/", getTypes);
router.get("/:id", getTypeById);

export default router;