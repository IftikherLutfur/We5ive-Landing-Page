import { connectDb } from "@/lib/connectDb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    const db = await connectDb();
    const clothesCollection = db.collection("clothes")
    try {
        const clothes = await clothesCollection.findOne({ _id: new ObjectId(params.id) });
        return NextResponse.json({message:"Successfully gets the Data", clothes}, {status:200})

    } catch (error) {
     return NextResponse.json({message:"Not Found"}, {status:404})
    }
}