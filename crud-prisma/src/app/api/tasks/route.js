import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma.js';

export async function GET(){
    const tareas = await prisma.task.findMany();
    //console.log(tareas);

    return NextResponse.json(tareas);
}

export async function POST(request){
    const {title, nombreImagen} = await request.json();
    //console.log(data);

    const nuevaTarea= await prisma.task.create({
        data:{
            title:title,
            description:nombreImagen
        }
    });

    return NextResponse.json(nuevaTarea);
}