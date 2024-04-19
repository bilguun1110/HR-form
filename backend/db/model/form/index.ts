import { Model, model, Schema, models } from "mongoose";

export type FormModelType = {
  _id: Schema.Types.ObjectId;
  specialization: string;
  firstName: string;
  lastName: string;
  gender?: string;
  phone: string;
  age: number;
  address?: string;
  social: string;
  createdAt: Date;
  updatedAt: Date;
};

const FormSchema = new Schema<FormModelType>({
  specialization: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  social: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

export const FormModel: Model<FormModelType> =
  models["Forms"] || model("Forms", FormSchema);
