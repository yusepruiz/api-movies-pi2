import { Router } from "express";
import { createProducer, updateProducer, getProducers, getProducerById, getActiveProducers } from "./producer.controller.js";
import { validateSchema } from "../../middleware/validator.middleware.js";
import { producerSchema } from "./producer.schema.js";

const router = Router();

/** Productora **/
router.post("/", validateSchema(producerSchema), createProducer);
router.patch("/:id", validateSchema(producerSchema.partial()), updateProducer);
router.get("/", getProducers);
router.get("/active", getActiveProducers);
router.get("/:id", getProducerById);

export default router;