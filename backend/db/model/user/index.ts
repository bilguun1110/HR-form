import { Model, model, Schema, models } from "mongoose";

export type UserModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  OTP: string;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<UserModelType>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: false },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
  OTP: { type: String, required: true },
});

export const UserModel: Model<UserModelType> =
  models["User"] || model("User", UserSchema);
export const isEmailValid = UserSchema.index({ email: 1 }, { unique: true });
