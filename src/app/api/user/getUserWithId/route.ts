"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const uid = body.uid;

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
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.error();
  }
}
