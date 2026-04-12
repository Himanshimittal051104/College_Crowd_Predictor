import mongoose from "mongoose";

export const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGODB_URL);
};