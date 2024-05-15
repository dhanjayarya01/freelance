import mongoose from "mongoose";
// import Data from "@/constants.ts"
import {Databasename} from  "../constants"
export async function Dbconnect() {
    try {

        console.log("MONGODB_URI",process.env.MONGODB_URI)
        
        mongoose.connect(`${process.env.MONGODB_URI}/${Databasename}`)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}