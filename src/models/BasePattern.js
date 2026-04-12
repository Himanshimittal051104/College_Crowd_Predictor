import mongoose from "mongoose";

const schema = new mongoose.Schema({
  location: String,
  hour: Number,
  dayType: String,
  crowdLevel: Number
});

export default mongoose.models.BasePattern || mongoose.model("BasePattern", schema);