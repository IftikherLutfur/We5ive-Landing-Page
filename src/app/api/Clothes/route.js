import { connectDb } from "@/lib/connectDb"
import { NextResponse } from "next/server";

export const GET = async ()=>{
    
    try {
        const db = await connectDb();
        const clothesCollection = db.collection("clothes")
        const clothes = await clothesCollection.find().toArray()
        return NextResponse.json(
            { clothes , message:"Successfully find the data"} , {status:200}
        )
    } catch (error) {
        console.error("Error fetching data" , error)
        return NextResponse.json(
            {status:500 , message:"something went wrong"},
            {status:500}
        )
    }
   
}