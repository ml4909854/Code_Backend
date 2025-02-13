const mongoose = require("mongoose")
const mognoUrl = "mongodb://127.0.0.1:27017/problem13"



const connectDB = async()=>{
    try {
        await mongoose.connect(mognoUrl)
        console.log("Database is connected!")
    } catch (error) {
        console.log("connecting database Error!")
    }
}

module.exports = connectDB