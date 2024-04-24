import { getAllPhotos, getPhotoById } from "@/lib/Image-data";
import { NextResponse } from "next/server";


export async function GET(){

    const data = await getAllPhotos();

    return NextResponse.json(data)
}


