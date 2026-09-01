import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: string,
      required: [true, 'password is required'],
    },
  },
  { timestamp: true }
);

export const User = mongoose.mode('User', userSchema);
