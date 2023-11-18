import mongoose from "mongoose";
export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("mongoDB connected");
    }catch(err){
        console.log(err);
        process.exit();
    }
}