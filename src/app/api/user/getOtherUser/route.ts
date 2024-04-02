import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function getOtherUser(req: NextRequest, res:NextResponse) {
    try {
        const users = await prisma.users.findMany({
        select: {
            firstName: true,
            lastName: true,
        },
        });
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    } 
}
