"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const uid = randomUUID();
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
