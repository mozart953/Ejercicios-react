import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma.js";


export async function GET(request,{params}){
    const datos = await prisma.task.findUnique(
        {
            where:{
                id:Number(params.id)
            }
        }
    );
    //console.log(datos);

    return NextResponse.json(datos);
}

export async function PUT(request,{params}){
    const data = await request.json();

    const datosActualizados = await prisma.task.update({
        where:{
            id: Number(params.id)
        },
        data:data

    });

    return NextResponse.json(datosActualizados);
}

export async function DELETE(request,{params}){

    try{
        const tareaEliminada = await prisma.task.delete(
            {
                where:{
                    id:Number(params.id)
                }
            }
        );
    
        console.log("eliminando tarea: " + tareaEliminada);
    
        return NextResponse.json(tareaEliminada);


    }catch(e){
        return NextResponse.json(e.message);

    }
    
}