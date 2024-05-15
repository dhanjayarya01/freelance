import {User} from "@/models/user.model.js"
import { NextRequest, NextResponse, } from "next/server"
import bcryptjs from "bcryptjs"
import { Dbconnect } from "@/Dbconnect/Dbconnect"

Dbconnect()
export async function POST(request:NextRequest){
    const reqBody=await request.json()
    const{fullName,email,password}= reqBody

    console.log(reqBody)

    const user=await User.findOne({email})

    if(user){
        return NextResponse.json({error:"user already exists"},{status:400})
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)


    const newUser = new User({
        fullName,
        email,
        password: hashedPassword
    })

    const savedUser = await newUser.save()
    console.log(savedUser);

    //send verification email

    return NextResponse.json({
        message: "User created successfully",
        success: true,
        savedUser
    })
}