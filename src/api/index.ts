import express from "express";
import { animalRouter } from "./animals/animal.routes";

const router = express.Router();

router.use("/animals", animalRouter);

export default router;
