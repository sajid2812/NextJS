import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    user: "Sajid",
    email: "sajid@gmail.com",
  });
}

export function POST() {
  return NextResponse.json({
    user: "Sajid",
    email: "sajid@gmail.com",
  });
}
