import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const headers = req.headers;
  const authorizationHeader = headers("authorization");
  const decoded = jwt.decode(authorizationHeader, "SECRET");
  const userId = decoded.userId;

  // get profile from db

  return NextResponse.json({
    avatarUrl:
      "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/",
  });
}
