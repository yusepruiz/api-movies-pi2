import { Router } from "express";
import { createGender, getGenderById, getGenders, updateGender } from "./gender.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { genderSchema } from "./gender.schema.js";


const router = Router();

/** Géneros **/
router.post("/", validateSchema(genderSchema), createGender);
router.patch("/:id", validateSchema(genderSchema.partial()), updateGender);
router.get("/", getGenders);
router.get("/:id", getGenderById);

export default router;