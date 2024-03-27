"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("Création de l'utilisateur");
  try {
    const body = await req.json();

    const uid = Math.random().toString(36).substring(2, 12).toUpperCase();
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const password = body.password;

    const cryptedPassword = (await bcrypt.hash(password, 10)) as string;

    const newUser = await prisma.users.create({
      data: {
        id: uid,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: cryptedPassword,
      },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.error();
  }
}
