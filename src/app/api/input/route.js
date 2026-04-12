import { connectDb } from "@/lib/db";
import LiveInput from "@/models/LiveInput";

export async function POST(req) {
  await connectDb();

  const { location, crowdLevel } = await req.json();

  await LiveInput.create({
    location,
    crowdLevel,
    timestamp: new Date()
  });

  return Response.json({ success: true });
}