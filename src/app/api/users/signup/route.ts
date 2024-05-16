import { NextRequest, NextResponse, } from "next/server"
import bcryptjs from "bcryptjs"
import Dbconnect from "@/Dbconnect/Dbconnect"
import Users from "@/models/user.model"


Dbconnect()
export async function POST(request:NextRequest){
   try {
     const reqBody=await request.json()
     const{fullName,email,password}= reqBody
 
     if([fullName,email,password].some((field)=>field?.trim() === ""))
  {  
     return NextResponse.json({error:'All fields are required '},{status:400})
    
  }
 
  
     const user=await Users.findOne({email})
 
     if(user){
         return NextResponse.json({error:"user already exists"},{status:400})
     }
 
   
     const newUser = await Users.create({
         fullName,
         email,
         password
     })
 
     //send verification email
 
     return NextResponse.json({
         message: "User created successfully",
         success: true,
         newUser
     })
   } catch (error) {
    console.log("signSeverError",error)
    return Response.json(
        { message: 'Internal server error', success: false },
        { status: 500 }
      );
   }
}