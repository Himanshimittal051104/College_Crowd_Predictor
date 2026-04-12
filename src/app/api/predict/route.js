import { connectDb } from "@/lib/db";
import LiveInput from "@/models/LiveInput";
import BasePattern from "@/models/BasePattern";

function getLabel(score) {
  if (score < 1.5) return "Low";
  if (score < 2.5) return "Medium";
  return "High";
}

export async function GET(req) {
  await connectDb();

  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");

  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  const dayType = (day === 0 || day === 6) ? "weekend" : "weekday";

 const baseData = await BasePattern.findOne({ location, hour, dayType });
  const base = baseData?.crowdLevel || 2;

  const last30Min = new Date(Date.now() - 30 * 60 * 1000);

  const live = await LiveInput.find({
    location,
    timestamp: { $gte: last30Min }
  });

  let liveAvg = base;

  if (live.length > 0) {
    const sum = live.reduce((a, b) => a + b.crowdLevel, 0);
    liveAvg = sum / live.length;
  }

  const score = 0.7 * base + 0.3 * liveAvg;

  return Response.json({
    crowd: getLabel(score),
    score,
    base,
    liveAvg
  });
}