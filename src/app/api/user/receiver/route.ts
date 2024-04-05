import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const headers = req.headers;
  const receiverId = headers.get("receiverId");

  if (!receiverId) {
    return NextResponse.json("Missing receiverId", { status: 400 });
  }

  const receiver = await prisma.users.findUnique({
    where: {
      id: receiverId,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      profilePicture: true,
    },
  });

  if (!receiver) {
    return NextResponse.json("Receiver not found", { status: 404 });
  }

  return NextResponse.json(receiver, { status: 200 });
}
