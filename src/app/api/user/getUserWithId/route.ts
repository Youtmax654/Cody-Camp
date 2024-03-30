"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    if (body.uid) {
      const uid = body.uid;
      console.log("Get User with UID:", uid);

      const user = await prisma.users.findUnique({
        where: { id: uid },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          password: true,
          role: true,
          active: true,
        },
      });
      console.log("User found:", user);
      return NextResponse.json(user, { status: 201 });
    } else {
      console.error("Error: No UID provided");
      return NextResponse.error();
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.error();
  }
}
