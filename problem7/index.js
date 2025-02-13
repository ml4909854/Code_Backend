// Query Parameters: Create a route /search that accepts a query parameter q and returns it.

// Hint: Use req.query.
const express = require("express")
const app = express()

app.get("/search" , (req , res)=>{
    const filter= req.query
   res.send(filter)
    console.log()
})

app.listen(3000 , ()=>{
    console.log("server is running")
})