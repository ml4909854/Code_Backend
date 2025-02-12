const express = require("express")
const app = express()

app.get("/about" , (req , res)=>{
res.send("Hey about!")
})
app.get("/contact" , (req , res)=>{
res.send("Hey contact!")
})

app.listen(3000 , ()=>{
    console.log("server is running")
})