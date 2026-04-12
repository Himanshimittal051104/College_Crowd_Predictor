import mongoose from "mongoose";

const schema = new mongoose.Schema({
  location: String,
  crowdLevel: Number,
  timestamp: Date
});

export default mongoose.models.LiveInput || mongoose.model("LiveInput", schema);