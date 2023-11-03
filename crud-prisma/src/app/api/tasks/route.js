import { NextResponse } from "next/server";
import prisma from '@/libs/prisma.js'

export function GET(){
    prisma.task.findMany();

    return NextResponse.json("obteniendo tareas");
}

export function POST(){
    return NextResponse.json("creando tareas");
}