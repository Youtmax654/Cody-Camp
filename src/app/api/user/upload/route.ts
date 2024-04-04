import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const profilePicture = req.body as any;

    const { searchParams } = new URL(req.url);
    const filename = searchParams.get("filename") as string;

    const blob = await put(filename, profilePicture, {
      access: "public",
    });

    if (!blob) {
      return NextResponse.json("Error while uploading user profile picture", {
        status: 400,
      });
    }

    return NextResponse.json({ url: blob.url }, { status: 201 });
  } catch (error) {
    console.error("Error while updating user information:", error);
    return NextResponse.error();
  }
};
