import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import api from "./api";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/error";
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Express api server",
    });
});

app.use("/api", api);

app.use(notFound);
app.use(errorHandler);

export default app;
