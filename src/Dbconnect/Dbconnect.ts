import mongoose from 'mongoose';
import {Databasename} from "@/constants"
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function Dbconnect(): Promise<void> {
   console.log("jfsld")
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  } else{
    console.log("not connected  to data base")
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/${Databasename}`)

    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default Dbconnect;





// import mongoose from "mongoose";
// // import Data from "@/constants.ts"
// import {Databasename} from  "../constants"
// export async function Dbconnect() {
//     try {

//         console.log("MONGODB_URI",process.env.MONGODB_URI)
        
//         mongoose.connect(`${process.env.MONGODB_URI}/${Databasename}`)
//         const connection = mongoose.connection;

//         connection.on('connected', () => {
//             console.log('MongoDB connected successfully');
//         })

//         connection.on('error', (err) => {
//             console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//             process.exit();
//         })

//     } catch (error) {
//         console.log('Something goes wrong!');
//         console.log(error);
        
//     }


// }