// Basic MongoDB Connection: Connect your Express app to a MongoDB database using Mongoose.

// Hint: Use mongoose.connec

const mongoose = require("mongoose")
const mongoUrl = "mongodb://127.0.0.1:27017"


const connectDB = async()=>{
    try {
        await mongoose.connect(mongoUrl)
        console.log("mongoose connect successfully")

    } catch (error) {
        console.log("error to connect Database")
    }
}
connectDB()