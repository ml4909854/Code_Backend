// Hello World API: Create a basic Express.js server that responds with "Hello World" at the root endpoint (/).

const express =require("express")

const app = express()

app.get("/" , (req , res)=>{
    res.send("Hello world!")
})
app.listen(3000 , ()=>{
    console.log("server is running")
})