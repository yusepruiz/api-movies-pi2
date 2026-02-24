import { Router } from "express";
import { createGender, updateGender } from "./gender.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { genderSchema } from "./gender.schema.js";

const router = Router();

/** Géneros **/
router.post("/", validateSchema(genderSchema), createGender);
router.put("/", validateSchema(genderSchema), updateGender);

export default router;