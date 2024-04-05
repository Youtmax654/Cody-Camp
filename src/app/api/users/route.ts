"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const headers = req.headers;
  const uid = headers.get("uid");

  try {
    const user = await prisma.users.findMany({
      where: {
        id: {
          not: uid as string,
        },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        profilePicture: true,
      },
    });

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error fetching users:", error);
    throw NextResponse.error();
  }
}
