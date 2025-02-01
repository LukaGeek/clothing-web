import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodbForWl";
import User from "@/models/UserSchema";

export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({}, "name email");

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
