"use server";

import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import NodeMailer from "nodemailer";

const prisma = new PrismaClient();
const transporter = NodeMailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("Envoi de l'email de vérification");
    const body = await req.json();

    const email = body.email;
    const uid = body.uid;
    const token = `${randomUUID()}${randomUUID()}`.replace(/-/g, "");

    const newToken = await prisma.authtokens.create({
      data: {
        id: token,
        userId: uid,
      },
    });

    console.log("Token créé: ", newToken);

    const res = await transporter.sendMail({
      from: `Cody <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Veuillez confirmer votre adresse e-mail",
      text: `Merci de vous être inscrit sur notre site. Veuillez confirmer votre adresse e-mail en cliquant sur ce lien: ${process.env.HOST}/confirmEmail/${token}`,
    });

    return NextResponse.json({ newToken, res }, { status: 201 });
  } catch (error) {
    console.error("Error while sending message:", error);
    return NextResponse.error();
  }
}
