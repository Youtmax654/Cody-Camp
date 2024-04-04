"use server";

import Planning from "@/app/planning/page";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const classname = body.classname;

    const newPlanning = await prisma.planning.create({
      data: {
        teacher: body.teacher,
        startDateTime: new Date(body.startTime).toISOString(),
        endDateTime: new Date(body.endTime).toISOString(),
        course: body.course,
        room: body.room,
        classname: classname,
      },
    });

    return NextResponse.json(newPlanning, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'insertion des données:", error);
    return NextResponse.error();
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const headers = req.headers;
  const uclassname = headers.get("uclassname") || "";

  try {
    if (uclassname) {
      const planning = await prisma.planning.findUnique({
        where: { classname: uclassname },
        select: {
          teacher: true,
          startDateTime: true,
          endDateTime: true,
          course: true,
          room: true,
          classname: true,
        },
      });

      if (!planning) {
        return NextResponse.json("User not found", { status: 404 });
      }

      return NextResponse.json(planning, { status: 200 });
    }
  } catch (error) {
    console.error("Error while getting user information:", error);
    return NextResponse.error();
  }
}
