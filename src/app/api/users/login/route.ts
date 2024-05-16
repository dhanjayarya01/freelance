
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import  bcrypt from "bcryptjs"
import Users from "@/models/user.model";
import jwt from "jsonwebtoken"
import Dbconnect from "@/Dbconnect/Dbconnect";

Dbconnect()

export async function POST(request:NextRequest){

    try {
        const reqBody=await request.json()
    
    const {email,password}=reqBody
    
    if([email,password].some((field)=>field?.trim() === ""))
        {  
           return NextResponse.json({error:'All fields are required '},{status:400})
          
        }
        
        console.log("email",email)
        const user=await Users.findOne({email})
    
        if(!user){
            return NextResponse.json({error:'user not found'},{status:409})
        }
    console.log("password",user.password,password)
    
        // const validatePassword= await bcrypt.compare(password,user.password)
        const validatePassword= await user.isPasswordCorrect(password)
        if(!validatePassword){
            return NextResponse.json({error:'Invalid user credentials'},{status:400})
        }
    
        // const loggedInuser= await User.findById(user._id).select("-password -refreshToken")
    
    
        const tokenData = {
            id: user._id,
            fullName: user.fullName,
            email: user.email
        }
        const token =  jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})
    
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        return response;
    
    } catch (error) {
        console.log("login",error)
        return Response.json(
            { message: 'Internal server error', success: false },
            { status: 500 }
          );
    }

} 