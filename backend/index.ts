import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connect, set } from "mongoose";
import { userRouter } from "./routers";
dotenv.config();

const app = express();
const connect_string: string = process.env.CONNECTION_STRING || "";

const connectDb = async () => {
  set(`strictQuery`, false);
  await connect(connect_string);
};

app.use(cors());
app.use(express.json());
connectDb();
dotenv.config();
app.use(userRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
