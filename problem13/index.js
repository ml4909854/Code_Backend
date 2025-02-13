
const express = require("express")
const connectDB = require("./db")
const userRouter = require("./controller/UserController")
const app = express()

app.use(express.json())

app.use("users" , userRouter)

app.get("/" , (req , res)=>{
    res.send("connected!")
})

app.listen(3000 , async()=>{
    await connectDB()
    console.log("server is running")
})