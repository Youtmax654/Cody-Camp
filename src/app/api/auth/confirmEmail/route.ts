"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const token = body.token;
    if (token) {
      const res = await prisma.authtokens.findUnique({
        where: { id: token },
        select: {
          userId: true,
        },
      });
      if (res) {
        await prisma.authtokens.delete({
          where: { id: token },
        });
        const user = await prisma.users.update({
          where: {
            id: res.userId,
          },
          data: {
            active: true,
          },
        });
        if (user) {
          return NextResponse.json("Email confirmed", { status: 200 });
        } else {
          return NextResponse.json("Error confirming email", { status: 400 });
        }
      } else {
        return NextResponse.json("Token not found", { status: 400 });
      }
    } else {
      return NextResponse.json("Token not found", { status: 400 });
    }
  } catch (error) {
    console.error("Error confirming email:", error);
    return NextResponse.error();
  }
}
