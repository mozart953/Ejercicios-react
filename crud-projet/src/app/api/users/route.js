import {NextResponse} from 'next/server'

console.log(process.env.TOKEN);

export function GET(){

   // return new Response("Hello world");
    return NextResponse.json({message:"getting"});
}
export async function POST(request){

    const {nombre, apellido}= await request.json();
    console.log(nombre, apellido);
    // return new Response("Hello world");
     return NextResponse.json({message:"posting"});
 }

 export function PUT(){

    // return new Response("Hello world");
     return NextResponse.json({message:"putting"});
 }

 export function DELETE(){

    // return new Response("Hello world");
     return NextResponse.json({message:"deleting"});
 }