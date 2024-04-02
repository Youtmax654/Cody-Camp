"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const headers = req.headers;

  const uid = headers.get("uid") || "";
  const email = headers.get("email") || "";

  try {
    if (uid) {
      const user = await prisma.users.findUnique({
        where: { id: uid },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          secondEmail: true,
          role: true,
          active: true,
        },
      });

      if (!user) {
        return NextResponse.json("User not found", { status: 404 });
      }

      return NextResponse.json(user, { status: 201 });
    } else if (email) {
      const user = await prisma.users.findUnique({
        where: { email: email },
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

      if (!user) {
        return NextResponse.json("User not found", { status: 404 });
      }

      return NextResponse.json(user, { status: 201 });
    } else {
      return NextResponse.json("No user information provided", { status: 400 });
    }
  } catch (error) {
    console.error("Error while getting user information:", error);
    return NextResponse.error();
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const uid = body.user.id;
    const secondEmail = body.secondEmail;

    console.log("body: ", body);
    console.log("uid: ", uid);
    console.log("secondEmail: ", secondEmail);

    const user = await prisma.users.update({
      where: { id: uid },
      data: { secondEmail: secondEmail },
    });

    if (!user) {
      return NextResponse.json("Error while updating user information", {
        status: 400,
      });
    }

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error while updating user information:", error);
    return NextResponse.error();
  }
}

export async function PATCH(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const uid = body.user.id;
    const oldPassword = body.oldPassword;
    const newPassword = body.newPassword;

    const user = await prisma.users.findUnique({
      where: { id: uid },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }

    if (await bcrypt.compare(oldPassword, user.password)) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      const updatedUser = await prisma.users.update({
        where: { id: uid },
        data: { password: hashedPassword },
      });

      if (!updatedUser) {
        return NextResponse.json("Error while updating user password", {
          status: 400,
        });
      }

      return NextResponse.json(updatedUser, { status: 201 });
    } else {
      return NextResponse.json("Old password is incorrect", { status: 400 });
    }
  } catch (error) {
    console.error("Error while updating user password:", error);
    return NextResponse.error();
  }
}
