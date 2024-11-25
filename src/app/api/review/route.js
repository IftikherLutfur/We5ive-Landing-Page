import { connectDb } from "@/lib/connectDb"
import { NextResponse } from "next/server";

export const GET = async () =>{
    const db = connectDb();
    const reviewsCollection = db.collection("reviews")
    try {
        const reviews = await reviewsCollection.find().toArray()
        return NextResponse.json({message:"Get the data" ,reviews},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error}, {status:404})
    }
}