"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const email = body.email;
    const password = body.password;

    const user = await prisma.users.findUnique({
      where: { email: email },
      select: {
        id: true,
        email: true,
        password: true,
        active: true,
      },
    });

    if (!user) {
      return NextResponse.json("Le compte n'existe pas", { status: 400 });
    }

    if (!user.active) {
      return NextResponse.json("Veuillez vérifier votre compte", {
        status: 400,
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      return NextResponse.json(user, { status: 201 });
    } else {
      return NextResponse.json("Le mot de passe est incorrect", {
        status: 400,
      });
    }
  } catch (error) {
    console.error("Error on connexion:", error);
    return NextResponse.error();
  }
}
