import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { formRouter, userRouter } from "./routers";

import { connectDb } from "./db/database";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
connectDb();

app.use(userRouter);
app.use(formRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
