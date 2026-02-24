import { Router } from "express";
import { createProducer, updateProducer } from "./producer.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { producerSchema } from "./producer.schema.js";

const router = Router();

/** Productora **/
router.post("/", validateSchema(producerSchema), createProducer);
router.patch("/:id", validateSchema(producerSchema.partial()), updateProducer);

export default router;