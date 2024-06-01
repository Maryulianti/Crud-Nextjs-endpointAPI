import { prisma } from "@/lib/prisma";
import { constants } from "buffer";
import { NextRequest, NextResponse } from "next/server";
import { AiTwotoneWarning } from "react-icons/ai";

//Read DataBase
export const GET = async (req:NextRequest) =>{ 
    const books = await prisma.book.findMany({})

    return NextResponse.json({books})

}

//Create Database
export const POST = async (req:NextRequest) => {

    const {nama_buku, penulis, penerbit, genre} = await req.json()

    const book = await prisma.book.create({
        data: {
            nama_buku, penulis, penerbit, genre
        }
    })

    return NextResponse.json({book})

}

//Delete Database
export const DELETE = async (req:NextRequest) => {
    const url = new URL(req.url).searchParams
    const id = url.get('id') || ''

    const post = await prisma.book.delete({
        where : {
            id: id
    }
    })

    if(!post){
        return NextResponse.json({message : "error"}, {status : 500})
    }
    return NextResponse.json({})
}

// Update Data
export const PUT = async (req: NextRequest) => {
    const { nama_buku, penulis, penerbit, genre, id } = await req.json()

    const book = await prisma.book.update({
        where: { 
            id : id
        },
        data: { nama_buku, penulis, penerbit, genre }
    });
}

