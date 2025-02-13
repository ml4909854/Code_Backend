// Route Parameters: Create a route /user/:id that returns the user ID from the URL.

// Hint: Use req.params.

const express = require("express")
const app = express()

app.get("/users/:id" , (req , res)=>{
    const id = req.params.id
    res.send(id) // ok these will work
})

app.listen(3000 , ()=>{
    console.log("server is running")
})