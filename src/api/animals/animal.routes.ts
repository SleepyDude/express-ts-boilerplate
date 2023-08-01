import express from "express";
import { getAllAnimals } from "./animal.handlers";

export const animalRouter = express.Router();

animalRouter.post("/", async (req, res) => {
    const data = req.body;
    console.log(`got data: ${JSON.stringify(data)}`);

    res.json("invoked POST api/animals");
});

animalRouter.get("/", async (req, res) => {
    const users = await getAllAnimals();
    res.json(users);
});
