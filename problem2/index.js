require("dotenv").config()
const express = require("express")
const app = express()

app.get("/" , (req ,res)=>{
    res.send("Hello world!")
})
const port = process.env.PORT
app.listen(port , ()=>{
    console.log(`server is running ${port}`)
})