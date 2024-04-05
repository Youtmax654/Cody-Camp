import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import Pusher from "pusher";

const prisma = new PrismaClient();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID as string,
  key: process.env.PUSHER_KEY as string,
  secret: process.env.PUSHER_SECRET as string,
  cluster: process.env.PUSHER_CLUSTER as string,
  useTLS: true,
});

export async function GET(req: NextRequest, res: NextResponse) {
  const headers = req.headers;
  const uid = headers.get("uid");
  const receiverId = headers.get("receiverId");

  if (!uid || !receiverId) {
    return NextResponse.json(
      { error: "Missing uid or receiverId" },
      { status: 400 }
    );
  }

  const messages = await prisma.messages.findMany({
    where: {
      OR: [
        {
          senderId: uid,
          receiverId: receiverId,
        },
        {
          senderId: receiverId,
          receiverId: uid,
        },
      ],
    },
    select: {
      id: true,
      senderId: true,
      receiverId: true,
      content: true,
      datetime: true,
    },
    orderBy: {
      datetime: "asc",
    },
  });

  if (!messages) {
    return NextResponse.json({ error: "No messages found" }, { status: 404 });
  }

  console.log("Messages found:", messages);
  return NextResponse.json(messages, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const uid = body.uid;
  const receiverId = body.receiverId;

  if (!uid || !receiverId) {
    return NextResponse.json(
      { error: "Missing uid or receiverId" },
      { status: 400 }
    );
  }

  const message = await prisma.messages.create({
    data: {
      senderId: uid,
      receiverId: receiverId,
      content: body.content,
    },
  });

  if (!message) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 400 }
    );
  }

  await pusher.trigger("messenger", "new-message", {
    id: message.id,
    senderId: uid,
    receiverId: receiverId,
    content: body.content,
    datetime: message.datetime,
  });

  return NextResponse.json(message, { status: 201 });
}
