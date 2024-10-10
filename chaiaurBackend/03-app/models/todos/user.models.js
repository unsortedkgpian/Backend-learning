import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    isActive: Boolean,
    password: {
      type: Sring,
      required: [true, "Password is required"],
    },
    createdAt,
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
