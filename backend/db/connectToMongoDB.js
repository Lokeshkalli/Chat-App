import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB,)
        console.log("Connected to mongodb")
        
    } catch (error) {
        console.log("Error connecting to mongo db",error.message)
        
    }
}
export default connectToMongoDB;