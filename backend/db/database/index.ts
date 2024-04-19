import { connect, set } from "mongoose";

type CONNECTION_STRING = string;

export const connectDb = async () => {
  set(`strictQuery`, false);

  try {
    await connect(process.env.CONNECTION_STRING as CONNECTION_STRING),
      console.log("Succesfully connected to DB");
  } catch (error) {
    console.log("DB connection is unsuccesfull");
  }
};
