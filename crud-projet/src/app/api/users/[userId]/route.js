import { NextResponse } from "next/server";

export async function GET(request, {params}){
    //console.log(params);
    const {searchParams} = new URL(request.url);
    console.log(searchParams);
    console.log(searchParams.get("nombre"));
    console.log(searchParams.get("apellido"));
    const res = await fetch(`https://reqres.in/api/users/${params.userId}`);
    const data = await res.json();
    return NextResponse.json(data);
}