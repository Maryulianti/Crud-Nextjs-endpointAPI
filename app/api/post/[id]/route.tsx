import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
    const id = context.params.id

    const post = await prisma.book.findFirst({
        where: {
            id : id
        }
    })

    return NextResponse.json({ post });
};